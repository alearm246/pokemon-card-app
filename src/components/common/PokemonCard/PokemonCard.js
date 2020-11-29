import React, { useState } from "react";
import style from "./PokemonCard.module.css";
import ReactCardFlip from 'react-card-flip';
import pokeBallImage from "../../../Images/pokeBall.png";


function PokemonCard(props){

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  const addDefaultSrc = (event) => {
    event.target.src = pokeBallImage;
  }

  return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={style.pokemonCard} key="front" onClick={handleClick}>
        <img className={style.pokemonImg} src={props.pokemonImgUrl} alt="pokemonImg" onError={addDefaultSrc}/>
        <div className={style.basicInfo}>
          <p style={{fontWeight: "bold"}}>{props.name}</p>
          <br />
          <p style={{fontWeight: "bold"}}>{props.type}</p>
        </div>
      </div>

      <div className={style.pokemonCard} key="back" onClick={handleClick}>
        <p>HP {props.hp}</p>
      </div>
    </ReactCardFlip>
  )
}

export default PokemonCard;
