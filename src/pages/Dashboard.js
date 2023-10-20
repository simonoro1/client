import {useContext, useEffect,useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";

function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useLogout();
  const { error, isPending, checkUser } = useAuth();
  
  const nav = useNavigate();
  

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    
    const verifyRefreshToken = async () => {
      // Chequear si hay un usuario logeado y refrescar access token


      try {
        await checkUser();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    !token ? verifyRefreshToken() : setIsLoading(false);
  }, []);



  return (
    <div className="">
      <div className="">
        {user && <p>Hello: {user.name}</p>}
        <button onClick={handleLogout}>LOG OUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
