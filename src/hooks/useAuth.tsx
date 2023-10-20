import {useEffect, useState} from 'react'
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useLogout } from './useLogOut';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { logout } = useLogout();
  const {dispatch} = useAuthContext()
  const nav = useNavigate();

  const checkUser = async () => {
    setError(null);
    setIsPending(true);
    const response: Response | void = await fetch(
      "http://localhost:5000/users/refresh",
      {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
      .then(response => response.json()).then(data =>{
        dispatch({
          type: 'LOGIN',
          payload: data
        })
      })
      .catch((error) => {
        console.log(error)
        logout()
      }
      );

    return response;
  };

  return { error, isPending, checkUser };
}