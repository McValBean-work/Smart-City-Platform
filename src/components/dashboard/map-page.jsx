import SideBar from "../layout/sidebar"
import Main from "../layout/main"
import StreetLightMap from "./map";
import TopSection from "./top-section";

function MapPage(){
    return(
<>
   <div className='flex min-h-screen min-w-full'>
    <SideBar />
    <div className='flex flex-col w-full'>
                <TopSection />
                <Main className='flex flex-col flex-1 w-full bg-gray-50'>
                    <StreetLightMap />
                </Main>
    </div>
    </div>
</>
// flex flex-1 min-w-full
    )
}
export default MapPage;