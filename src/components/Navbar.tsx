import { Link } from 'react-router-dom'
import Temple from '../assets/temple.svg'
import {useLogout} from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
    const {error, isPending, logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <div className='navbar'>
            <ul>
                <li className='logo'>
                        <img src={Temple} alt='dojo logo'/>
                        <span>The Dojo</span>
                </li>
                <li>
                    {!user && <Link to='/login'>Login</Link>}
                </li>
                <li>
                    {!user && <Link to='/signup'>SignUp</Link>}
                </li>
                <li>
                    {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                    {isPending && <button className='btn' disabled>Logging out...</button>}
                </li>


            </ul>
        </div>
    )
}

export default Navbar