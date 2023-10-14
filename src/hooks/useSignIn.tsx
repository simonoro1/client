import { useState } from "react";
// import { useAuthContext } from "./useAuthContext"
// import { useNavigate } from "react-router-dom"

interface signparam {
  name: string;
  password: string;
}

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  // const {dispatch} = useAuthContext()
  // const nav = useNavigate();

  const signin = async (userData: signparam) => {
    setError(null);
    setIsPending(true);
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userData),
    });

    return response.json();
  };

  return { error, isPending, signin };
};
