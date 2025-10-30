import { useNavigate } from 'react-router-dom';

export default function Logout(){
    const navigate = useNavigate();
        localStorage.clear();
        console.log(localStorage.getItem("role"));
        navigate("/login");
        
    };