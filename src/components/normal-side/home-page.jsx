import LandingHeader from "./landing-header.jsx";
import Main from "../layout/main.jsx";
import { Link } from "react-router-dom";
import CityView from '../../assets/images/cityview.jpg';

function HomePage(){
    return(
        <>
        <LandingHeader />
        <Main className='flex p-4 *:sm:p-0 w-full h-full my-12 justify-center items-center'>
            <div className="relative flex min-h-full w-full sm:w-9/12 border-none rounded-2xl">
                <img src={CityView} className="flex rounded-2xl min-w-full min-h-full object-fill grow-0" alt="city view photo" />
                <div className="rounded-2xl min-w-full min-h-full bg-black/70 flex justify-center items-center absolute">
                <div className="flex flex-col text-neutral-100 p-8 items-center w-full min-h-full rounded-2x1 justify-around">
                    <h1 className="font-bold text-4xl mb-4">Report An Issue</h1>
                    <p className="text-center mb-4 text-xl">Help us keep our community beautiful and safe. Report any issues you encounter with public property here</p>
                    <Link to='/report' className='px-4 py-2 mt-4 bg-[#1CAC78] text-black font-bold w-min rounded whitespace-nowrap'>Report an issue</Link>
                </div>
                </div>

            </div>
            
        </Main>
        </>
    )
}

export default HomePage;