import React from "react";
import style from "./PokemonCardsPage.module.css";
import PokemonCards from "../../common/PokemonCards/PokemonCards.js";
import Header from "../../common/Header/Header.js";


function PokemonCardsPage(){
  return (
    <div className={style.pokemonCardsPage}>
      <Header />
      <PokemonCards />
    </div>
  )
}

export default PokemonCardsPage;
