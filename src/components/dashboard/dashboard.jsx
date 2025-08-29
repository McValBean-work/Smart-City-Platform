import React from "react";
import getRole from "../Authentication-page/auth";
import AdminDashboard from "../Roles/admin/admin-dashboard";
import SupervisorDashboard from "../Roles/supervisor/supervisor-dashboard";
import EngineerDashboard from "../Roles/engineer/engineer-dashboard";
import TopSection from "./top-section";
import Main from "../layout/main";
import SideBar from "../layout/sidebar";

function Dashboard(){
    const role = getRole();
    return(
        <div className="flex min-h-screen min-w-full">
         <SideBar />
        <div className="flex flex-col w-full">
            <TopSection />  
                <Main className='flex flex-1 min-w-full'>
                    {role === 'admin' && <AdminDashboard />}
                    {role === 'supervisor' && <SupervisorDashboard />}
                    {role === 'engineer' && <EngineerDashboard />}

                </Main>
        </div>

        </div>
    )
}

export default Dashboard;