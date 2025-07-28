import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import MainIcon from '../../assets/images/omnicityicon.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
function NavBar(){


    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();
    const onHome = location.pathname === "/";
    
    return(
        <>
        <nav className="flex px-2 pb-4 w-full h-min justify-between items-center relative">
            <NavLink to="/landing-page" className='w-15 h-full md:w-15 p-0 m-0'>
            <img src={MainIcon} alt="Smart City Logo" className= "w-full max-h-1/2 sm:h-full lg:w-[200%] lg:h-[200%] border-none" />
            </NavLink>            
            <div>
                 <button onClick={() => setShowMobileMenu( prev => !prev )}
                className='flex sm:hidden w-min min-h-full p-2 rounded-sm bg-neutral-200'>
                <FontAwesomeIcon icon={faBars} className='flex sm:hidden text-2xl' />
            </button>
            
            </div>
            <div className="hidden sm:flex h-full w-min">
                { !onHome && 
                <NavLink to="/" className={({ isActive })=> isActive ? 'mr-2 px-4 py-1 lg:text-2xl text-[#1CAC78] font-semibold   hover:bg-[#1CAC78]/10 rounded' : 'mr-2 px-4 py-1  font-semibold lg:text-2xl   hover:bg-[#1CAC78]/10 rounded' }>Home</NavLink>
                }
                <NavLink to="/about" className={({ isActive })=> isActive ? 'mr-2 px-4 py-1  text-[#1CAC78] font-semibold lg:text-2xl   hover:bg-[#1CAC78]/10 rounded' : 'mr-2 px-4 py-1 font-semibold lg:text-2xl hover:    hover:bg-[#1CAC78]/10 rounded'}>About</NavLink>
                <NavLink to="/contact-us" className={({ isActive })=> isActive ? 'mr-2 px-4 py-1 whitespace-nowrap  text-[#1CAC78] font-semibold lg:text-2xl         hover:bg-[#1CAC78]/10 rounded' : 'mr-2 px-4 py-1 font-semibold whitespace-nowrap lg:text-2xl         hover:bg-[#1CAC78]/10 rounded'}>Contact Us</NavLink>
                <NavLink to="/faqs" className={({ isActive })=> isActive ? 'mr-2 px-4 py-1  text-[#1CAC78] font-semibold lg:text-2xl   hover:bg-[#1CAC78]/10 rounded' : 'mr-2 px-4 py-1 font-semibold lg:text-2xl   hover:bg-[#1CAC78]/10 rounded'}>FAQs</NavLink>
                <NavLink to="/report" className={onHome? 'rounded-2xl bg-[#1CAC78] whitespace-nowrap px-4 py-1 font-semibold lg:text-2xl':({ isActive })=> isActive ? 'px-4 py-1 whitespace-nowrap text-[#1CAC78] font-semibold lg:text-2xl     hover:bg-[#1CAC78]/10 rounded' : 'px-4 py-1 font-semibold whitespace-nowrap lg:text-2xl hover:bg-[#1CAC78]/10 rounded' }>Report an issue</NavLink>

            </div>
        </nav>
        {showMobileMenu && (
            <div className="transition-all duration-300 ease-in-out flex flex-col min-h-screen w-full z-10000 bg-black/60  absolute top-0 left-0" >
                <div className='bg-white min-h-screen min-w-1/2 p-2'>
                 <div className='flex w-full min-h-full justify-between mb-10 z-10001 items-center'>   
                <img src={MainIcon} alt="" className="w-15 md:w-15 min-h-full flex"/>
                <button onClick={()=> setShowMobileMenu(false)} className='flex w-8 min-h-full top-0'>
                    <FontAwesomeIcon icon={faCircleXmark} className="w-full text-4xl min-h-full" />
                </button>
            </div>
            <div className="flex flex-col p-4">
                {!onHome && 
                    <NavLink to="/" className={({ isActive })=> isActive ? ' text-[#1CAC78] text-2xl w-min font-semibold mb-4' : 'w-min text-2xl font-semibold mb-4' }>Home</NavLink>
                }
                
                <NavLink to="/about" className={({ isActive })=> isActive ? '  text-[#1CAC78] text-2xl w-min font-semibold mb-4' : ' w-min text-2xl font-semibold mb-4'}>About</NavLink>
                <NavLink to="/contact-us" className={({ isActive })=> isActive ? '  text-[#1CAC78] text-2xl w-min font-semibold mb-4' : 'w-min text-2xl font-semibold whitespace-nowrap mb-4'}>Contact Us</NavLink>
                <NavLink to="/faqs" className={({ isActive })=> isActive ? '   text-[#1CAC78] text-2xl w-min font-semibold mb-4' : 'w-min text-2xl font-semibold mb-4'}>FAQs</NavLink>
                <NavLink to="/report" className={({ isActive })=> isActive ? ' text-[#1CAC78] text-2xl font-semibold w-min whitespace-nowrap mb-4' : 'w-min text-2xl whitespace-nowrap font-semibold mb-4' }>Report an issue</NavLink>
            </div>

                </div>
           
            </div>
            
        )

        }
        
        </>
    )
}



function LandingHeader (){
    return(
            <NavBar />
    )
}

export default LandingHeader