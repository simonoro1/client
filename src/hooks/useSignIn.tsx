import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "./useAuthContext"
// import { useNavigate } from "react-router-dom"

interface signparam {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext()
  const nav = useNavigate();

  const signin = async (user: signparam) => {
    try {

      axios.post('http://localhost:5000/users/login', {
        email:user.email,
        password: user.password,
      })
      .then( response => {
        console.log('User Logged Succesfully')
        console.log(response.status)
        console.log(response.data)
        nav('/')
      })
    } catch (error) {
      //handle errors !!!
      console.log(error)
    }
  }

  return { error, isPending, signin };
};
