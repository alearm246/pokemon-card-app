import React, {useEffect} from "react";
import CreatePokemon from "../../common/CreatePokemon/CreatePokemon.js";
import Header from "../../common/Header/Header.js";
import Intro from "./Intro/Intro.js";
import style from "./HomePage.module.css"
import axios from "axios";

function HomePage(){

  return (
    <div className={style.homePage}>
      <Header />
      <Intro />
    </div>
  )
}

export default HomePage;
