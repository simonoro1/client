import { Link } from 'react-router-dom'
// import Temple from '../assets/temple.svg'
import {useLogout} from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
    const {error, isPending, logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <div className='h-20 w-full  bg-white  fixed flex items-center justify-between'>
                <div className=" flex justify-center items-center w-64 rounded-3xl shadow-xl bg-gray-100 p-2 ml-10">
                    {/* <p>{user.name}</p> */}
                </div>
                    {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                    {isPending && <button className='btn' disabled>Logging out...</button>}
        </div>
    )
}

export default Navbar