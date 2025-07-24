import LandingHeader from "./landing-header.jsx"
import Main from "../layout/main.jsx"
import { Link } from "react-router-dom";
import CityView from '../../assets/images/cityview.jpg'

function HomePage(){
    return(
        <>
        <LandingHeader />
        <Main className='flex w-full min-h-full justify-center items-center grow'>
            <div className="relative flex h-full min-w-9/12 border-none">
                <img src={CityView} className="rounded-2x1 min-w-full min-h-full" alt="" />
                <div className="z-5 rounded-2xl min-w-full min-h-full bg-neutral-400 flex justify-center items-baseline p-10 absolute">
                <div className="flex flex-col text-white text-center w-full h-full">
                    <h1 className="font-bold ">Report An Issue</h1>
                    <p>Help us keep our community neautiful and safe. Report any issues you encounter with public property here</p>
                    <Link to='/report' className='px-4 py-2 mt-4 bg-cyan-300 font-bold'>Report an issue</Link>
                </div>
                </div>

            </div>
            
        </Main>
        </>
    )
}

export default HomePage;