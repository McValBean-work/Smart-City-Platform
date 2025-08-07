import SideBar from "../layout/sidebar"
import Main from "../layout/main"
import StreetLightMap from "./map";
import PropertyTable from "../Roles/property-table";
import TopSection from "./top-section";

function PropertiesPage(){
    return(
<>
   <div className='dashboard'>
    <TopSection />
    <div className='dashboard-body'>
                <SideBar />
                <Main className='p-4 flex-1'>
                    <StreetLightMap />
                    <PropertyTable />
                </Main>
    </div>
    </div>
</>
    )
}
export default PropertiesPage;