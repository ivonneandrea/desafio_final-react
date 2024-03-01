import React, {useState} from 'react'

function Search ({value, onChange}) {
    return (
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar Pokemons:"
        
      />
    )
  }
