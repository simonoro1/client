import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// import { useAuthContext } from "./useAuthContext"
// import { useNavigate } from "react-router-dom"

interface signparam {
  name: string;
  password: string;
}

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext()
  // const nav = useNavigate();

  const signin = async (userData: signparam) => {
    setError(null);
    setIsPending(true);
    const response: Response | void = await fetch(
      "http://localhost:5000/users/login",
      {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(userData),
      }
    )
      .then(response => response.json()).then(data =>{
        console.log(data)
        dispatch({
          type: "LOGIN",
          payload: data
        })
      })
      .catch((error) => console.log(error));

    return response;
  };

  return { error, isPending, signin };
};
