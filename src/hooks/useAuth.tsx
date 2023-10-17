import {useEffect, useState} from 'react'
import { useAuthContext } from './useAuthContext';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext()
  // const nav = useNavigate();

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
        console.log('user already logged:', data)
        dispatch({
          type: 'LOGIN',
          payload: data
        })
      })
      .catch((error) => console.log(error));

    return response;
  };

  return { error, isPending, checkUser };
}