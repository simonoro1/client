
import { useContext, useEffect } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import { AuthContext } from './context/AuthContext';
import {useAuth} from "./hooks/useAuth"

function App() {
  const {user} = useContext(AuthContext)
  const {error, isPending, checkUser} = useAuth()

  
  
  useEffect(() => {
    // check user
    checkUser()
  }, [user])


  return (
    <div className="App">
      
      {user &&  <p>Hello: {user.user}</p>}
    </div>
  );
}

export default App;
