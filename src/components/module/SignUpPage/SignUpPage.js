import React, {useState,useEffect} from "react";
import style from "./SignUpPage.module.css";
import axios from "axios";

function SignUpPage(){

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("mounting");
    const getUsers = async () => {
      try{
        const response = await axios.get("http://localhost:5000/users");

        console.log(response);
      }
      catch(err){
        console.error(err);
      }
    }
    getUsers();
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    createUser();
  }

  const createUser = async () => {
    const user = {
      userName: userName,
      email: email,
      password: password
    }
    try{
      const response = await axios.post("http://localhost:5000/users", user);

      console.log("user created: ", response);
    }
    catch(err){
      console.error(err);
      console.log(user);
    }
  }

  return(
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
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

export default SignUpPage;
