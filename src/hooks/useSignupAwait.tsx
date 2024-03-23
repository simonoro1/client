import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

interface signuparam {
  userName: String;
  email:String;
  password: String;
}

interface IUser {
  token: string,
  user: string
}

export const useSignupAwait = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const nav = useNavigate();

  const signup = async (user: signuparam) => {
    try {

      axios.post('http://localhost:5000/users/register', {
        userName: user.userName,
        password: user.password,
        email: user.email
      })
      .then( response => {
        console.log('User Created Succesfully')
        console.log(response.status)
        console.log(response.data)
        nav('/auth/login')
      })
    } catch (error) {
      //handle errors !!!
      console.log(error)
    }
  }

  return {signup};
}
