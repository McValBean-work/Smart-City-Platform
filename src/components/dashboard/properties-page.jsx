import SideBar from "../layout/sidebar"
import Main from "../layout/main"
import { Properties } from "../Roles/property-table";
import TopSection from "./top-section";

function PropertiesPage(){
    return(
<>
   <div className='flex min-h-screen min-w-full'>
    <SideBar />
    <div className='flex flex-col w-full h-full'>
                <TopSection />
                <Main className='flex flex-col flex-1 min-w-full min-h-full bg-gray-50'>
                    <Properties />
                </Main>
    </div>
    </div>
</>
    )
}
export default PropertiesPage;