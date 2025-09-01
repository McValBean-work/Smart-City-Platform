import SideBar from "../layout/sidebar";
import TopSection from "../dashboard/top-section";
import Main from "../layout/main";
import UserTable from "./user-table";

export default function UserManagementPage (){
    return(
        <>
        <div className="flex min-h-screen min-w-full">
                <SideBar />
                <div className='flex flex-col w-full'>
                    <TopSection />
                    <Main className='flex flex-col p-1 bg-gray-50'>
                        <UserTable />
                    </Main>
                </div>
            </div>
        </>
    )
}