import { useState } from 'react';

function TopSection(){
    const CurrentUser = JSON.parse(localStorage.getItem("userData") || "{}");
    const [showUserInfo, setShowUserInfo] = useState(false);

    const logout=()=>{
        localStorage.clear();
        console.log(localStorage.getItem("role"));
    };
    return(
        <>
        <div className='flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-white h-20'>
            <div></div>
            <div className='flex items-center space-x-4'>
                <button className='rounded' onTouchMoveCapture={()=> setShowUserInfo(true)} >{CurrentUser.fullName}</button>
                <span className="bg-primary/20 text-primary rounded-xl py-1 px-2 text-sm">{CurrentUser.role.charAt(0).toUpperCase() + CurrentUser.role.slice(1)}</span>
            </div>
        </div>
        </>
    )
}
export default TopSection;