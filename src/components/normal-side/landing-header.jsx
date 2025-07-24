import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import MainIcon from '../../assets/images/omnicity.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
function NavBar(){


    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();
    const onHome = location.pathname === "/";
    
    return(
        <>
        <nav className="flex px-4 w-full h-min justify-between items-center relative">
            <NavLink to="/landing-page" className='w-10 md:w-15 h-15 p-0 m-0'>
            <img src={MainIcon} alt="Smart City Logo" className= "w-full h-full border-none" />
            </NavLink>            
            <div>
                 <button onClick={() => setShowMobileMenu( prev => !prev )}
                className='flex sm:hidden m:hidden lg:hidden w-min h-fit p-2 rounded-sm bg-neutral-200'>
                <FontAwesomeIcon icon={faBars} className='flex sm:hidden w-min h-full' />
            </button>
            
            </div>
            <div className="hidden sm:flex h-full w-min">
                { !onHome && 
                <NavLink to="/" className={({ isActive })=> isActive ? 'mr-4 px-4 py-1 text-primary' : 'mr-4 px-4 py-1' }>Home</NavLink>
                }
                <NavLink to="/about" className={({ isActive })=> isActive ? 'mr-4 px-4 py-1 text-primary' : 'mr-4 px-4 py-1'}>About</NavLink>
                <NavLink to="/contact-us" className={({ isActive })=> isActive ? 'mr-4 px-4 py-1 whitespace-nowrap text-primary' : 'mr-4 px-4 py-1 whitespace-nowrap'}>Contact Us</NavLink>
                <NavLink to="/faqs" className={({ isActive })=> isActive ? 'mr-4 px-4 py-1 text-primary' : 'mr-4 px-4 py-1'}>FAQs</NavLink>
                <NavLink to="/report" className={({ isActive })=> isActive ? 'mr-4 px-4 py-1 text-primary whitespace-nowrap bg-cyan-300' : 'mr-4 px-4 py-1 whitespace-nowrap bg-cyan-300 rounded-2xl' }>Report an issue</NavLink>

            </div>
        </nav>
        {showMobileMenu && (
            <div className="transition-all flex flex-col min-h-screen w-full z-10000 bg-neutral-300  absolute top-0 left-0" >
            <div className='flex w-full min-h-full justify-between p-8 mb-10 z-10001'>   
                <img src={MainIcon} alt="" className="w-1/2 h-1/10 flex"/>
                <button onClick={()=> setShowMobileMenu(false)} className='flex w-8 h-4 top-0'>
                    <FontAwesomeIcon icon={faCircleXmark} className="w-full h-full" />
                </button>
            </div>
            <div className="flex flex-col p-4">
                <NavLink to="/" className={({ isActive })=> isActive ? 'bg-amber-400 w-min ' : 'w-min' }>Home</NavLink>
                <NavLink to="/about" className={({ isActive })=> isActive ? ' bg-amber-400 w-min' : ' w-min'}>About</NavLink>
                <NavLink to="/contact-us" className={({ isActive })=> isActive ? ' bg-amber-400 w-min' : 'w-min whitespace-nowrap '}>Contact Us</NavLink>
                <NavLink to="/faqs" className={({ isActive })=> isActive ? '  bg-amber-400 w-min' : ' w-min'}>FAQs</NavLink>
                <NavLink to="/report" className={({ isActive })=> isActive ? 'bg-amber-400 w-min whitespace-nowrap' : 'w-min whitespace-nowrap' }>Report an issue</NavLink>
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