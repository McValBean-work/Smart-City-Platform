import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import OmniCityLogo from "../../assets/images/OmniCityIcon.png"
import api from "../api/axios-instance"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
function ForgotPasswordForm(){

  const currentUser = JSON.parse(localStorage.getItem("userData")) || null;

  const location = useLocation();

  const InitialState = { 
    token: '' ,
    newPassword: '' ,
    email: currentUser ? currentUser.email : '',
  }; 

  const [isLoading , setIsLoading] = useState(false);
  const [confirmNewPassword , setConfirmNewPassword] = useState('');
  const [newPassword , setNewPassword] = useState('');
  const [resetInfo , setResetInfo] = useState(InitialState);

  useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const tokenFromURL = queryParams.get("token");
  if (tokenFromURL) {
    setResetInfo(prev => ({ ...prev, token: tokenFromURL }));
  }
}, [location]);


  async function handleSubmit(e){
    e.preventDefault();
    if(newPassword !== confirmNewPassword){
      toast.error("Passwords do not match");
      return;
    }
    else{
      setIsLoading(true);
      console.log(resetInfo);
      setResetInfo(prev => ({...prev , newPassword: newPassword}));
    try{
      const res = await api.post('/api/auth/reset-password', resetInfo);
      console.log(res);
      toast.success(res.data.message || 'Password reset successful');
      setIsLoading(false);
      setResetInfo(InitialState);
      setNewPassword('');
      setConfirmNewPassword('');

    }
    catch(error){
      console.log(error);
      setIsLoading(false);
      toast.error(error?.response?.data?.message || 'Error resetting password');
      setResetInfo(InitialState);
      setNewPassword('');
      setConfirmNewPassword('');
  }}}
    return(
      <>
      <form id="forgotPasswordForm" onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg w-9/10 md:w-100 gap-6">
      <div className="flex flex-col items-center mb-4">
        <img src={OmniCityLogo} alt="omni-city-logo" className="w-15 h-15" />
        <span className="ml-2 text-xl font-medium">OmniCity</span>
      </div>
      <h2 className="text-xl font-semibold text-start w-full ">Reset your password</h2>
      <div className="grid gap-2 w-full">
      <label htmlFor="newPassword">New password</label>
      <input type="password" placeholder= "Enter new password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border rounded px-2 py-1 border-gray-300 mb-2" required/>
      <label htmlFor="confirmNewPassword">Confirm new password</label>
      <input type="password" placeholder="Confirm new password"  id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="border rounded px-2 py-1 border-gray-300 mb-2" required/>
      <input type="submit" value={isLoading? 'Submitting...': 'Submit'} className="rounded w-full py-1 bg-primary my-4" />
      <span className="flex items-center justify-center text-sm"> Remember password?<Link to="/login" className="ml-2 text-primary underline">Login</Link></span>
      </div>
     </form>
    </>
    )
  }
  function ForgotPasswordPage(){
    return(
      <>
      <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
        <ForgotPasswordForm />
      </div>
     
      </>
    );
  }

  export default ForgotPasswordPage;