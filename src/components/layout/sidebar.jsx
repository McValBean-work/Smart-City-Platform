import { NavLink } from "react-router-dom";
import getRole from "../Authentication-page/auth";
import OmniCityLogo from "../../assets/images/OmniCityIcon.png";
import {
  Home,
  Map,
  MapPin,
  ListChecks,
  FileText,
  Users,
} from "lucide-react";

function SideBar() {
  const role = getRole();

  // Base links
  const baseLinks = [
    { to: "/portal/dashboard", title: "dashboard", icon: Home, label: "Dashboard" },
    { to: "/portal/map", title: "map", icon: Map, label: "Map" },
    { to: "/portal/properties", title: "properties", icon: MapPin, label: "Properties" },
    { to: "/portal/tasks", title: "tasks", icon: ListChecks, label: "Tasks" },
    { to: "/portal/reports", title: "reports", icon: FileText, label: "Reports" },
  ];

  // Role-specific links
  const roleLinks = {
    admin: [
      ...baseLinks,
      { to: "/portal/user-management", title: "user management", icon: Users, label: "User Management" },
    ],
    supervisor: baseLinks,
    engineer: baseLinks,
  };

  const links = roleLinks[role] || [];

  return (
    <div className="flex flex-col bg-white border-r h-screen">
      {/* Header */}
      <div className="flex items-center justify-center border-b py-4 px-4 h-20">
        <img src={OmniCityLogo} alt="OmniCity logo" className="w-10 h-14 object-contain" />
        <div className="ml-3 hidden sm:flex flex-col justify-center">
          <span className="text-lg font-semibold leading-none">OmniCity</span>
          <span className="text-gray-500 text-sm whitespace-nowrap">Keep your city working</span>
        </div>
      </div>

      {/* Sidebar links */}
      <aside className="flex flex-col flex-1 w-full px-2 mt-6 space-y-1 items-center sm:items-start">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            title={link.title}
            className={({ isActive }) =>
              `flex items-center w-full sm:w-full px-3 py-2 rounded-md transition-colors duration-150 ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-gray-700 hover:bg-primary/10 hover:text-primary"
              }`
            }
          >
            <link.icon className="w-5 h-5 sm:mr-2 text-center shrink-0" />
            <span className="hidden sm:inline text-sm font-medium capitalize">{link.label}</span>
          </NavLink>
        ))}
      </aside>
    </div>
  );
}

export default SideBar;
