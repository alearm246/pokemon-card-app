import React, {useState, useEffect} from "react";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import style from "./PokemonCards.module.css";

function PokemonCards(){

  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const getPokemonCard = async () => {
      try{
        const response = await axios.get("http://localhost:5000/pokemoncard");
        console.log("get response: ", response);
        setPokemonCards(response.data);
      }
      catch(err){
        console.error(err);
      }
    }
    getPokemonCard();
  }, [])

  return (
    <div className={style.pokemonCards}>
      {
        pokemonCards.map((pokemonCard, key) => {
          return(
            <PokemonCard name={pokemonCard.name} type={pokemonCard.type} hp={pokemonCard.hp} key={key}/>
          )
        })
      }
    </div>
  )
}

export default PokemonCards;
