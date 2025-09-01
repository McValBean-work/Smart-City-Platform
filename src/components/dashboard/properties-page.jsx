import SideBar from "../layout/sidebar"
import Main from "../layout/main"
import StreetLightMap from "./map";
import PropertyTable from "../Roles/property-table";
import TopSection from "./top-section";

function PropertiesPage(){
    return(
<>
   <div className='flex min-h-screen min-w-scren'>
    <SideBar />
    <div className='flex flex-col min-w-full'>
                <TopSection />
                <Main className='flex flex-col flex-1 min-w-full bg-gray-50'>
                    <StreetLightMap />
                    <PropertyTable />
                </Main>
    </div>
    </div>
</>
    )
}
export default PropertiesPage;