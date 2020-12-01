import React from "react";
import style from "./Header.module.css";
import pokeBallImage from "../../../Images/pokeBall.png";
import { Link } from "react-router-dom";

function Header(){
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/" className={style.link}>
          <img className={style.pokeBallImage} src={pokeBallImage} alt="pokeballImage" />
          <div className={style.logoText}>PokeCard</div>
        </Link>
      </div>
      <div className={style.headerNav}>
        <Link to="/create" className={style.navEntry}>
          <div>create</div>
        </Link>
        <Link to="/cards" className={style.navEntry}>
          <div>cards</div>
        </Link>
      </div>
      <div className={style.headerButtonHolder}>
        <Link to="/login">
          <button className={style.headerButton}>Log in</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;
