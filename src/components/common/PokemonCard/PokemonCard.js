import React from "react";
import style from "./PokemonCard.module.css";

function PokemonCard(props){
  return(
    <div className={style.pokemonCard}>
      <p>name: {props.name}</p>
      <p>type: {props.type}</p>
      <p>hp: {props.hp}</p>
    </div>
  )
}

export default PokemonCard;
