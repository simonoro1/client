import {useContext, useEffect,useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";

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

  }, [token, user]);



  return (
    <div className="flex">
      <Sidebar/>
      <NavBar/>
    </div>
    // <div className="">
    //   <div className="">
    //     {/* <Sidebar user = {user}/> */}
    //     {user && <p>Hello: {user.name}</p>}
    //     <button onClick={handleLogout}>LOG OUT</button>
    //   </div>
    // </div>
  );
}

export default Dashboard;
