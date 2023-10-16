
import { useContext, useEffect } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import { AuthContext } from './context/AuthContext';
import {useAuth} from "./hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { useLogout } from './hooks/useLogOut';

function App() {
  const {user, authIsReady} = useContext(AuthContext)
  const {logout} = useLogout()
  const {error, isPending, checkUser} = useAuth()
  const nav = useNavigate()
  
  

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="App">
      
      {user &&  <p>Hello: {user.name}</p>}
      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default App;
