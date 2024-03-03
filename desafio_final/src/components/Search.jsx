import { useEffect } from "react";

const Search = ({ characters, search, setSearch, setFilteredData }) => {
    // set search so it captures the input
    const inputFilter = (e) => {
        setSearch(e.target.value);
    };

    // useEffect with condition to show characters or the filteredData
    useEffect(() => {
      const findWord = search.toLowerCase();
        setFilteredData(
                !search
                ? characters
                : characters.filter((character) =>
                character.name.toLowerCase().includes(findWord)
            )
        );
        
    }, [characters, search, setFilteredData]);

    return (
        <>
            <header>
              <h1>Pokemons</h1>
                <section className="searchSection">
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        placeholder="Encuentra tu personaje de pokemons"
                        onChange={inputFilter}
                    />
                </section>
            </header>
        </>
    );
};

export default Search;
