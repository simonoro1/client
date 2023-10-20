import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();
  const nav = useNavigate();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    await fetch(
        "http://localhost:5000/users/logout",
        {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
        .then(response => response.json()).then(data =>{
          console.log(data)
        })

    dispatch({ type: "LOGOUT" });
    setIsPending(false);
    nav("/auth/login");
  };

  return { error, isPending, logout };
};
