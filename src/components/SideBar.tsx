import { Link } from "react-router-dom";
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

function Sidebar() {
 
  return (
    <aside className="flex-col h-screen w-40 text-white items-center bg-gray-900">
        <nav className="">
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
    </aside>
  );
}

export default Sidebar;