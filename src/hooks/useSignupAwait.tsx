import { useState } from "react";

import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

interface signuparam {
  name: String;
  email:String;
  password: String;
}

export const useSignupAwait = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const nav = useNavigate();




  
  const signup = async (user: signuparam) => {
    try {

      const response = await fetch('http://localhost:5000/users/register',{
        method: "POST", 
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
      }).then( response => response.json()).then(data => {
        dispatch({
          type: "LOGIN",
          payload: data
        })
      }).catch(
        (error) => console.log(error)
      )

      nav("/");
    } catch (error) {
      console.error(error);
    }
  };
  return { error, signup };
};
