import React, {useState} from "react"
import MyApi from './components/MyApi'
import Search from './components/Search'
import './App.css'

function App(){
  const [pokemons,setPokemons] = useState([]);
  const [reverse, setReverse] = useState (false)

  const api_url = "https://pokeapi.co/api/v2/pokemon?limit=200";

  async function getPokemons() {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  }

   const handleSort = () => {
    setReverse(!reverse)
  }
   const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      getPokemons();
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
      );
      setPokemons(filteredPokemons);
    }
  };

  const getPokemons = async () => {
    const response = await get(api_url);
    const { data } = response;
    setPokemons(data.results);
  };
 
  const sortPokemons = (pokemons) =>{
    const sortedPokemons = [...pokemons].sort ((a,b) => {
      if (a.name > b.name){
        return 1;
      }

      if (a.name < b.name){
        return -1;
      }
      return 0;

    }
    )
  }

 return (
   
   <div>
   <h1>Pokemons</h1>
  <Search value={search} onChange ={handleChange}/>
  <button oncClick = {handleSort}> Sort {reverse ? '⬆' : '⬇'}</button>
  < MyApi pokemons = {sortPokemons } />
</div>

)
}

export default App
