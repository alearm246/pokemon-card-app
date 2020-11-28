import React from "react";
import CreatePokemon from "../../common/CreatePokemon/CreatePokemon.js";
import PokemonCards from "../../common/PokemonCards/PokemonCards.js";


function HomePage(){
  return (
    <div>
      <h1>Pokemon Home Page</h1>
      <CreatePokemon />
      <PokemonCards />
    </div>
  )
}

export default HomePage;
