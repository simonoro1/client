import React, { useContext } from 'react'
import { useLogout } from '../hooks/useLogOut'
import { AuthContext } from '../context/AuthContext';
import Nicon from '../assets/notification.png'


function NavBar() {
  const {user} = useContext(AuthContext)
  const {error, isPending,logout} = useLogout();

  
  return (
    <nav className="flex h-20 w-full items-center justify-between flex-wrap border-b   bg-white p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">Hi, {user.name} &#128075;</span>
      </div>
    <div className='flex width-10 items-center justify-center'>
      <div className="flex mr-10 h-full w-7" >
        <img src={Nicon} alt="notifications" className='obejct-contain'/>
      </div>
      <button onClick={logout} className="inline-block text-sm px-4 py-2 leading-none border rounded border-gray  hover:bg-yellow-500 hover:text-white mt-4 lg:mt-0">Log Out</button>
    </div>
</nav>
  )
}

export default NavBar
