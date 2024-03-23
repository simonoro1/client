import {useContext, useEffect,useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import Sidebar from "../components/SideBar";
import NavBar from "../components/Navbar";
import DueBills from "../components/DueBills";

function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useLogout();
  const { error, isPending, checkUser } = useAuth();
  
  const nav = useNavigate();
  


  return (
    <div className="flex overflow-hidden">
      <Sidebar/>
      <div className=" flex-1 md:flex h-screen relative w-full">  
        <NavBar/>
        <DueBills/>
      </div>
      {/* <h1>WELCOME! {user.name}</h1> */}
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
