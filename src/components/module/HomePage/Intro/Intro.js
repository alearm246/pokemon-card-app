import React from "react";
import style from "./Intro.module.css";
import { Link } from "react-router-dom";

function Intro(){
  return(
    <div className={style.introContainer}>
      <h1 className={style.introText}>CREATE YOUR OWN CARDS</h1>
      <Link to="/create">
        <button className={style.button}>Get Started</button>
      </Link>
    </div>
  )
}

export default Intro;
