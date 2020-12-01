import React, {useState, useEffect} from "react";
import style from "./LoginPage.module.css";
import axios from "axios";

function LogInPage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    logInUser();
  }

  const logInUser = async () => {
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
    <div>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>create account</button>
      </form>
    </div>
  )
}

export default LogInPage;
