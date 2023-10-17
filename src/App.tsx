
import { useContext, useEffect } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
// import {useAuth} from "./hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { useLogout } from './hooks/useLogOut';
import { useAuth } from './hooks/useAuth';

function App() {
  const {user} = useContext(AuthContext)
  const {logout} = useLogout()
  const {error, isPending, checkUser} = useAuth()
  const nav = useNavigate()
  

  const handleLogout = () => {
    logout()
    // nav('/login')
  }

  useEffect(() => {
    
    // Chequear si hay un usuario logeado y refrescar access token
    checkUser()
  }, [])

  return (
    <div className="App">
      
      {user &&  <p>Hello: {user.name}</p>}
      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default App;
