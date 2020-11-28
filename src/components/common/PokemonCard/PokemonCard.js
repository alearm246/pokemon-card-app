import React from "react";
import style from "./PokemonCard.module.css";

function PokemonCard(props){
  return(
    <div className={style.pokemonCard}>
      <div className={style.row}>
        <p>{props.name}</p>
        <p>hp: {props.hp}</p>
      </div>
      <img className={style.pokemonImg} src={props.pokemonImgUrl} alt="pokemonImg" />

      <p>type: {props.type}</p>

    </div>
  )
}

export default PokemonCard;
