import React, {useState, useEffect} from "react";
import style from "./LoginPage.module.css";
import axios from "axios";
import pokeBallImage from "../../../Images/pokeBall.png";
import {Link} from "react-router-dom";

function LogInPage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    logInUser();
  }

  const hasFilledOutForm = () => {
    if(password === "" || email === ""){
      return false;
    }
  }


  const logInUser = async () => {

    if(!hasFilledOutForm()) return console.log("all forms are required");

    try{
      const user = {
        email: email,
        password: password
      }

      const response = await axios.post("http://localhost:5000/auth/login", user);

      localStorage.setItem('token', response.data.token);

      console.log("super cool: ", response);
    }
    catch(err){
      console.error(err);
    }
  }

  return(
    <div className={style.logInContainer}>
      <div className={style.logInPopUp}>
        <div className={style.imageHolder}>
          <img className={style.logo} src={pokeBallImage} alt="logo" />
        </div>
        <form className={style.formContainer}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.logInInput}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.logInInput}
          />
          <div className={style.buttonContainer}>
            <button className={style.button} onClick={handleClick}>create account</button>
          </div>
          <div className={style.signedUpTextContainer}>
            <div className={style.signedUpInText}>don't have an account? <Link to="/signup" className={style.link}>sign up!</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInPage;
