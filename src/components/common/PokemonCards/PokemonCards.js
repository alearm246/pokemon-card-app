import React, {useState, useEffect} from "react";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import style from "./PokemonCards.module.css";

function PokemonCards(){

  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try{
        const response = await axios.get("http://localhost:5000/auth/me", {
          headers: {
            'x-access-token': localStorage.getItem("token")
          }
        });

        console.log(response);
        setPokemonCards(response.data.pokemonCards);

      }
      catch(err){
        console.error(err);
        console.log(localStorage.getItem('token'));
      }
    }
    getCurrentUser();
  }, [])

  return (
    <div className={style.pokemonCards}>
      <div className={style.pokemonCardsContainer}>
        {
          pokemonCards.map((pokemonCard, key) => {
            return(
              <PokemonCard
                name={pokemonCard.name}
                type={pokemonCard.type}
                hp={pokemonCard.hp}
                pokemonImgUrl={pokemonCard.pokemonImgUrl}
                key={key}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default PokemonCards;
