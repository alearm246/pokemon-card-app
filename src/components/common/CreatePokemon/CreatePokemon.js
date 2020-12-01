import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import style from "./CreatePokemon.module.css";
import {UserInfoContext} from "../../../useContext/UserInfoProvider";

function CreatePokemon(){

  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState(0);
  const [moveName, setMoveName] = useState("");
  const [attackPower, setAttackPower] = useState(0);
  const [pokemonImgUrl, setPokemonImageUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {
      try{
        const response = await axios.get("http://localhost:5000/auth/me", {
          headers: {
            'x-access-token': localStorage.getItem("token")
          }
        });

        console.log(response);
        setEmail(response.data.email);

      }
      catch(err){
        console.error(err);
        console.log(localStorage.getItem('token'));
      }
    }
    getCurrentUser();
  }, [])



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
        pokemonImgUrl: pokemonImgUrl,
        email: email
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
          <label>user name</label>
          <input
            type="text"
            name="userName"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
