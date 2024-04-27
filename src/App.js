
import './App.css';
import pokemonTest from "./render-pokemon-png-1.png"

import React, {useEffect, useState} from "react";

function App() {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => setPokemonData(data.results))
        .catch(err => console.log(err));
  }, []);

  console.log(pokemonData.url)

  return (
    <div className="App">
      <div className="cards">
        {pokemonData.map((pokemon, id) => (
            <div className="card" key={id}>
            <span className="card-imgCont">
             <img src={pokemonTest} alt=""/>
            </span>
              <p className="card-txt">{pokemon.name}</p>
            </div>
        ))}
      </div>

    </div>
  );
}

export default App;
