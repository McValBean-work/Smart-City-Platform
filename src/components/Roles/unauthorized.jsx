import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Main from "../layout/main";

function UnauthorizedPage(){
    const navigate = useNavigate();
    const [count , setCount] = useState(5);

    useEffect(()=>{
       const timer = setInterval(()=>{
            setCount(prev => prev - 1);
        },1000)
         return () => clearInterval(timer);
    },[])


    useEffect(() => {
        setTimeout(() => {
        navigate("/portal/dashboard");
            }, 5000);


    },[navigate])


    return(
        <>
        <Main className="flex min-w-full min-h-screen justify-center items-center">
            <div className="text-center">
            <div className="text-9xl font-bold text-red-600">401</div>
            <div className="text-xl text-gray-700 mb-4">You are not authorized to view this page.</div>
            <div className="text-gray-600">Redirecting to dashboard in {count} second{count !== 1 ? 's' : ''}...</div>

            </div>
            
        </Main>
         
        </>
    )



}
export default UnauthorizedPage;