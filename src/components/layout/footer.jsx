import OmniLogo from '../../assets/images/OmniCityIcon.png'
function Footer(){
    return(
        <footer className="flex flex-col px-2 py-4  min-w-full items-center">
            <div className="flex justify-between items-center w-full min-h-full mb-4 sm:mb-2">
                <img src={OmniLogo} alt="" className='w-15 h-full md:w-15 p-0 m-0'/>
                <a href="https://github.com/McValBean-work/Smart-City-Platform" target="_blank">View on GitHub</a>
            </div>
            <div className="w-full h-full text-center">
                <span className='mb-4 sm:mb-2'>© 2025 Omni City Platform. All rights reserved.</span>
                <span className='mb-4 sm:mb-2'>Created by Valentine McBean-Willis</span>

            </div>

        </footer>
    )
}

export default Footer