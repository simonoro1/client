import { Link } from "react-router-dom";
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

function Sidebar({user}) {
 
  return (
    <div className="flex w-ful h-screen bg-violet-500 lg:w-1/2">
      <div className="sidebar-content">
        <div className="user">
          {user && <p>{user.name}</p>}
        </div>
        <nav className="links">
          <ul>
            <li>
              <Link  to="/">
                <img src={DashboardIcon} alt='dashnoard-icon'/>
                <span>Dashboard</span>
              </Link>
            </li>    
            <li>
              <Link to="/shop">
                <img src={AddIcon} alt='shop'/>
                <span>New Shopping</span>
              </Link>
            </li>  
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;