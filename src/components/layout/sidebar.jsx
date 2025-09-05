import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import getRole from "../Authentication-page/auth";
import OmniCityLogo from '../../assets/images/OmniCityIcon.png'
{/* import  { useState } from "react" */}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faHome , faFile , faUserPlus, faListCheck, faUsers} from "@fortawesome/free-solid-svg-icons";
function SideBar(){
    const role = getRole();

    const sidebarLinks = [
  { to: "/portal/dashboard", title: "dashboard", icon: faHome, label: "Dashboard" },
  { to: "/portal/map", title: "map", icon: faLocationDot, label: "Map" },
  { to: "/portal/properties", title: "properties", icon: faLocationDot, label: "Properties" },
  { to: "/portal/tasks", title: "tasks", icon: faListCheck, label: "Tasks" },
  { to: "/portal/reports", title: "view reports", icon: faFile, label: "Reports" },
];


    return(
        <>
        <div className="flex flex-col  bg-white border-r">
        <div className="flex items-center justify-center border-b py-2 px-4 w-max h-20">
            <img src={OmniCityLogo} className="w-15" />
            <span className="justify-center mx-2 hidden sm:flex sm:flex-col">
                <span className="white-space-collapse-none text-xl font-medium">OmniCity</span>
                <span className="text-gray-500 text-sm whitespace-nowrap">Keep your city working</span>
            </span>

        </div>
        <aside className="flex flex-col min-h-screen w-full px-2 mt-8">
            { role === 'admin' && (
                <>
                <div className="flex flex-col">
                <NavLink to="/portal/dashboard" title="dashboard" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center  px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faHome} className='mr-2' />
                <span className="whitespace-nowrap hidden sm:flex">Dashboard</span>
                
                </NavLink>
                <NavLink to="/portal/map" title="map" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faLocationDot}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">Map</span>
                </NavLink>
                <NavLink to="/portal/properties" title="properties" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faLocationDot}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">Properties</span>
                </NavLink>
                <NavLink to="/portal/user-management" title="User management" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faUsers}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">User Management</span>
                </NavLink>
                <NavLink to="/portal/tasks" title="tasks" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faListCheck}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">Tasks</span>
                </NavLink>
                <NavLink to="/portal/reports" title="view reports" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faFile}  className='mr-2' />
                <span className="whitespace-nowrap hidden sm:flex">Reports</span>
                </NavLink>
                <Link to="/sign-Up" title="create user" className="flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary">
                <FontAwesomeIcon icon={faUserPlus}  className='mr-2' />
                <span className="whitespace-nowrap hidden sm:flex">Create User</span>
                </Link>
            </div>
                </>
            )
            }
            {role === 'supervisor' && (
                <>
                <div className="sidebar-links">
  {sidebarLinks.map(({ to, title, icon, label }) => (
    <NavLink
      key={to}
      to={to}
      title={title}
      className={({ isActive }) =>
        isActive ? "flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary" : "flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary"
      }
    >
      <FontAwesomeIcon icon={icon} className='mr-2' />
      <span className="whitespace-nowrap hidden sm:flex">{label}</span>
    </NavLink>
  ))}
</div>

                </>
            )

            }
            {role === 'engineer' &&(
                <>
                <div className="sidebar-links">
                <NavLink to="/portal/dashboard" title="dashboard" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faHome}  className='sidebar-icon' />
                <span>Dashboard</span>
                </NavLink>
                <NavLink to="/portal/map" title="map" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faLocationDot}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">Map</span>
                </NavLink>
                <NavLink to="/portal/properties" title="properties" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faLocationDot}  className='mr-2'  />
                <span className="whitespace-nowrap hidden sm:flex">Properties</span>
                </NavLink>
                <NavLink to="/portal/tasks" title="tasks" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faListCheck}  className='sidebar-icon' />
                <span>Tasks</span>
                </NavLink>
                <NavLink to="/portal/properties" title="properties" className={({ isActive })=> isActive ? 'flex items-center bg-primary/20 text-primary px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary' : 'flex items-center px-2 py-1 mb-2 rounded hover:bg-primary/20 hover:text-primary'}>
                <FontAwesomeIcon icon={faLocationDot}  className='sidebar-icon'  />
                <span>Properties</span>
                </NavLink>
            </div>
                </>
            )

            }
            </aside>
              </div>
        </>
    )
}
export default SideBar