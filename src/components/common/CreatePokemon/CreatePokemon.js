import React, {useState, useEffect} from "react";
import axios from "axios";
import style from "./CreatePokemon.module.css";

function CreatePokemon(){

  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState(0);
  const [moveName, setMoveName] = useState("");
  const [attackPower, setAttackPower] = useState(0);
  const [pokemonImgUrl, setPokemonImageUrl] = useState("");



  const handleClick = (e) => {
    e.preventDefault();
    sendPokemonCard();
  }

  const sendPokemonCard = async () => {
    try{
      const pokemonCard = {
        name: pokemonName,
        type: pokemonType,
        hp: pokemonHp,
        pokemonImgUrl: pokemonImgUrl
      }

      const response = await axios.post("http://localhost:5000/pokemoncard", pokemonCard);
      console.log(response)
    }
    catch(err){
      console.error("we got a freaking error: ",  err);
    }
  }

  return(
    <div className={style.createPokemonForm}>
      <form>
        <div className={style.infoContainer}>
          <div className={style.pokemonInfo}>
            <label>Name</label>
            <input
              type="text"
              name="pokemonName"
              placeholder="pokemon name"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <br />
            <label>Type</label>
            <input
              type="text"
              name="pokemonType"
              placeholder="pokemon type"
              value={pokemonType}
              onChange={(e) => setPokemonType(e.target.value)}
            />
            <br />
            <label>Hp</label>
            <input
              type="number"
              name="pokemonHp"
              placeholder="pokemon hp"
              value={pokemonHp}
              onChange={(e) => setPokemonHp(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div className={style.infoContainer}>
          <div className={style.attackInfo}>
            <label>move name</label>
            <input
              type="text"
              name="moveName"
              placeholder="move name"
              value={moveName}
              onChange={(e) => setMoveName(e.target.value)}
            />
            <br />
            <label>attack power</label>
            <input
              type="number"
              name="attackPower"
              placeholder="move name"
              value={attackPower}
              onChange={(e) => setAttackPower(e.target.value)}
            />
            <input
              type="text"
              name="pokemonImg"
              placeholder="image url"
              value={pokemonImgUrl}
              onChange={(e) => setPokemonImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={handleClick}>Create Your Pokemon</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePokemon;
