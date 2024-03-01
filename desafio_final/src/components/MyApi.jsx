import React, { useEffect, useState } from 'react'

function MyApi({ pokemons }) {
  const [] = useState([])

  useEffect(() => {
   pokemons(id)
  }, [])


  return (
    <>
      <div className="main-container">
        <h1>Pokemons</h1>
        <p>Search for a pokemon:</p>
        <input type="text" onChange={handleChange} />
        <div className="container-pokemons">
          {pokemons.map((pokemon, index) => {
            const id = pokemon.url.split("/")[6];
            return (
              <div className="card" key={index}>
                <p key={index}>{pokemon.name}</p>
                <img
                  src={`
          https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png
          `}
                  alt={pokemon.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default MyApi

