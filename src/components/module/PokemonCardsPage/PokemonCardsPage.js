import React from "react";
import style from "./PokemonCardsPage.module.css";
import PokemonCards from "../../common/PokemonCards/PokemonCards.js";


function PokemonCardsPage(){
  return (
    <div className={style.pokemonCardsPage}>
      <PokemonCards />
    </div>
  )
}

export default PokemonCardsPage;
