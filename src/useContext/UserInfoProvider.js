import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserInfoContext = createContext([]);

export function UserInfoProvider(props) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try{
        const response = await axios.get("http://localhost:5000/auth/me", {
          headers: {
            'x-access-token': localStorage.getItem("token")
          }
        });

        console.log(response);
        setUserInfo(response.data);

      }
      catch(err){
        console.error(err);
      }
    }
    getCurrentUser();
  }, [])

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserInfoContext.Provider>
  );
}
