import React, {useState, useEffect} from "react";
import axios from "axios";

function CreatePokemon(){

  const [pokemonType, setPokemonType] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState(0);
  const [moveName, setMoveName] = useState("");
  const [attackPower, setAttackPower] = useState(0);

  useEffect(() => {
    const getPokemonCard = async () => {
      try{
        const response = await axios.get("http://localhost:5000/pokemoncard");
        console.log("get response: ", response);
      }
      catch(err){
        console.error(err);
      }
    }
    getPokemonCard();
  }, [])

  const handleClick = () => {
    sendPokemonCard();
  }

  const sendPokemonCard = async () => {
    try{
      const pokemonCard = {
        name: pokemonName,
        type: pokemonType,
        hp: pokemonHp
      }

      const response = await axios.post("http://localhost:5000/pokemoncard", pokemonCard);
      console.log(response)
    }
    catch(err){
      console.error("we got a freaking error: ",  err);
    }
  }

  return(
    <div>
      <form>
        <input
          type="text"
          name="pokemonName"
          placeholder="pokemon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="pokemonType"
          placeholder="pokemon type"
          value={pokemonType}
          onChange={(e) => setPokemonType(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="pokemonHp"
          placeholder="pokemon hp"
          value={pokemonHp}
          onChange={(e) => setPokemonHp(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="moveName"
          placeholder="move name"
          value={moveName}
          onChange={(e) => setMoveName(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="attackPower"
          placeholder="move name"
          value={attackPower}
          onChange={(e) => setAttackPower(e.target.value)}
        />
        <button onClick={handleClick}>send</button>
      </form>
    </div>
  )
}

export default CreatePokemon;
