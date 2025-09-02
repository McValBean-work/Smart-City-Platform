import SideBar from "../layout/sidebar"
import Main from "../layout/main"
import StreetLightMap from "./map";
import TopSection from "./top-section";

function MapPage(){
    return(
<>
   <div className='flex min-h-screen min-w-screen'>
    <SideBar />
    <div className='flex flex-col min-w-full min-h-full'>
                <TopSection />
                <Main className='flex flex-col flex-1 min-w-full min-h-full  bg-gray-50'>
                    <StreetLightMap />
                </Main>
    </div>
    </div>
</>
    )
}
export default MapPage;