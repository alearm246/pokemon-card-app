import React from "react";
import Header from "../../common/Header/Header.js";
import CreatePokemon from "../../common/CreatePokemon/CreatePokemon.js";
import style from "./CreatePage.module.css";


function CreatePage(){
  return(
    <div>
      <Header />
      <div className={style.createPokemon}>
        <CreatePokemon />
      </div>
    </div>
  )
}

export default CreatePage;
