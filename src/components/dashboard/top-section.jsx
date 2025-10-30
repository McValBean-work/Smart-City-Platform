import { useState } from 'react';
import Logout from '../Authentication-page/logout';


function TopSection(){
    const CurrentUser = JSON.parse(localStorage.getItem("userData") || "{}");
    const [showUserInfo, setShowUserInfo] = useState(false);


    
    return(
        <>
        <div className='flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-white h-20'>
            <div></div>
            <div className='flex items-center space-x-4'>
                <button className='rounded' onClick={()=> setShowUserInfo(prev => !prev)} >{CurrentUser.fullName}</button>
                <span className="bg-primary/20 text-primary rounded-xl py-1 px-2 text-sm">{CurrentUser.role.charAt(0).toUpperCase() + CurrentUser.role.slice(1)}</span>
                {showUserInfo && (
                <div className='absolute top-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-48 z-50'>
                    <p className='font-medium mb-2'>{CurrentUser.fullName}</p>
                    <p className='text-sm text-gray-600 mb-2'>{CurrentUser.email}</p>
                    <p className='text-sm text-gray-600 mb-2'>{CurrentUser.role.charAt(0).toUpperCase() + CurrentUser.role.slice(1)}</p>
                    <button onClick={Logout} className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>Logout</button>
                </div>
                )}
            </div>
        </div>
        </>
    )
}
export default TopSection; 