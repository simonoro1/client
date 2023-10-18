
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
// import {useAuth} from "./hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { useLogout } from './hooks/useLogOut';
import { useAuth } from './hooks/useAuth';
import SignIn from './pages/SignIn';

function Dashboard() {
  const {user} = useContext(AuthContext)
  const {logout} = useLogout()
  const {error, isPending, checkUser} = useAuth()
  const nav = useNavigate()
  

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    // Chequear si hay un usuario logeado y refrescar access token
    checkUser()
  }, [])

  return (
    <div className=''>
    <div className="">
      {user &&  <p>Hello: {user.name}</p>}
      <button onClick={handleLogout}>LOG OUT</button>
      </div>
    </div>
  );
}

export default Dashboard;