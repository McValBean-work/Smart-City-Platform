import LandingHeader from "./landing-header.jsx"
import Main from "../layout/main.jsx"
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
        <LandingHeader />
        <Main className='flex w-full min-h-1/6 justify-center items-center grow'>
            <div className="relative flex h-full w-9/12 border-none">
                <img src="" className="rounded-2x1 min-w-full min-h-full" alt="" />
                <div className="z-5 rounded-2xl min-w-full min-h-full bg-neutral-400 flex justify-center items-baseline p-10 absolute">
                <p>
                    <h2>Report An Issue</h2>
                    <p>Help us keep our community neautiful and safe. Report any issues you encounter with public property here</p>
                    <Link to='/report' className='px-4 py-2 bg-cyan-300 font-bold'>Report an issue</Link>
                </p>
                </div>

            </div>
            
        </Main>
        </>
    )
}

export default HomePage;