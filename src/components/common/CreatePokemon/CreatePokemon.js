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
        moveName: moveName,
        attackPower: attackPower,
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
    <div className={style.createPokemonContainer}>
      <div className={style.createPokemonPopUp}>
        <form className={style.formContainer}>
          <div className={style.infoContainer}>
            <div className={style.pokemonInfo}>
              <div className={style.inputContainer}>
                <b><label>Name</label></b>
                <input
                  type="text"
                  name="pokemonName"
                  value={pokemonName}
                  onChange={(e) => setPokemonName(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
              <br />
              <div className={style.inputContainer}>
                <b><label>Type</label></b>
                <input
                  type="text"
                  name="pokemonType"
                  value={pokemonType}
                  onChange={(e) => setPokemonType(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
              <br />
              <div className={style.inputContainer}>
                <b><label>Hp</label></b>
                <input
                  type="number"
                  name="pokemonHp"
                  value={pokemonHp}
                  onChange={(e) => setPokemonHp(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
            </div>
          </div>
          <br />
          <div className={style.infoContainer}>
            <div className={style.attackInfo}>
              <div className={style.inputContainer}>
                <b><label>move name</label></b>
                <input
                  type="text"
                  name="moveName"
                  value={moveName}
                  onChange={(e) => setMoveName(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
              <br />
              <div className={style.inputContainer}>
                <b><label>attack power</label></b>
                <input
                  type="number"
                  name="attackPower"
                  value={attackPower}
                  onChange={(e) => setAttackPower(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
              <br />
              <div className={style.inputContainer}>
                <b><label>image url</label></b>
                <input
                  type="text"
                  name="pokemonImg"
                  value={pokemonImgUrl}
                  onChange={(e) => setPokemonImageUrl(e.target.value)}
                  className={style.createPokemonInfo}
                />
              </div>
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.button} onClick={handleClick}>Create Your Pokemon</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePokemon;
