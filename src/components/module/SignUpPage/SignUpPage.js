import React, {useState,useEffect} from "react";
import style from "./SignUpPage.module.css";
import axios from "axios";
import pokeBallImage from "../../../Images/pokeBall.png";
import {Link} from "react-router-dom";

function SignUpPage(){

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    createUser();
  }

  const hasFilledOutForm = () => {
    if(password === "" || confirmPassword === "" || userName === "" || email === ""){
      return false;
    }
  }


  const createUser = async () => {
    const user = {
      userName: userName,
      email: email,
      password: password
    }

    if(password !== confirmPassword) return console.log("passwords need to match")

    if(!hasFilledOutForm()) return console.log("all forms are required");

    try{
      const response = await axios.post("http://localhost:5000/auth/register", user);

      console.log("user created: ", response);
    }
    catch(err){
      console.error(err);
      console.log(user);
    }
  }

  return(
    <div className={style.signUpContainer}>
      <div className={style.signUpPopUp}>
        <div className={style.imageHolder}>
          <img className={style.logo} src={pokeBallImage} alt="logo" />
        </div>
        <form className={style.formContainer}>
          <input
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={style.signUpInput}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.signUpInput}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.signUpInput}
          />
          <br />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={style.signUpInput}
          />
          <div className={style.buttonContainer}>
            <button className={style.button} onClick={handleClick}>create account</button>
          </div>
          <div className={style.loggedInTextContainer}>
            <div className={style.loggedInText}>already have an account? <Link to="/login" className={style.link}>log in!</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage;
