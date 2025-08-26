import api from "../api/axios-instance";
import getRole from "./auth";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import OmniCityIcon from '../../assets/images/OmniCityIcon.png';
import { toast } from "react-toastify";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm({
  className,
  ...props
}) {
      const navigate = useNavigate();
      const [showPassword , setShowPassword] = useState(false);
      const [isLoggingIn, setIsLoggingIn] = useState(false)
      const [loginCredentials , setLoginCredentials] = useState(
        {
          email: '' ,
          password: ''
        });
      const handleChange = (e)=>{
  const {name , value} = e.target;

    setLoginCredentials(prev =>({...prev, [name]: value}))

}
    
      const LoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
    
        try{
         console.log(loginCredentials);
         const response = await api.post('api/auth/login', loginCredentials);
         localStorage.setItem("userData", JSON.stringify(response.data.user));
         localStorage.setItem("authToken", response.data.token);
         localStorage.setItem("role", response.data.user.role);
         console.log(response.data);
         console.log('Hello', getRole());
         toast.success(response.data.message || 'Login successful');
         navigate("/portal/dashboard");
        }
        catch(error)
        {
          console.log(error);
          toast.error(error?.response?.data?.message || 'Error logging in');
        }
        finally{
          setLoginCredentials({
          email: '' ,
          password: ''
        });
        setIsLoggingIn(false);
        }};

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <img src={OmniCityIcon} className="w-20 h-20 mx-auto" />
          <CardTitle className='mx-auto mb-4'>Omni City</CardTitle>
          <CardDescription>
            login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={LoginSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={loginCredentials.email} name='email' onChange={handleChange} placeholder="m@example.com" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <div className="flex">
                  <Input id="password" type={showPassword? 'text': 'password'} value={loginCredentials.password} name='password' onChange={handleChange} required />
                <button onClick={()=> setShowPassword(prev =>!prev)}>
                  <FontAwesomeIcon icon={showPassword? faEyeSlash : faEye} className="text-primary ml-[-2rem]" />
                </button>

                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit">
                  {isLoggingIn? 'Logging in': 'Login'}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
      }




// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export default function LoginForm({
//   className,
//   ...props
// }) {
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader>
//           <CardTitle>Login to your account</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-3">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                 />
//               </div>
//               <div className="grid gap-3">
//                 <div className="flex items-center">
//                   <Label htmlFor="password">Password</Label>
//                   <a
//                     href="#"
//                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//                 <Input id="password" type="password" required />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <Button type="submit" className="w-full">
//                   Login
//                 </Button>
//                 <Button variant="outline" className="w-full">
//                   Login with Google
//                 </Button>
//               </div>
//             </div>
//             <div className="mt-4 text-center text-sm">
//               Don&apos;t have an account?{" "}
//               <a href="#" className="underline underline-offset-4">
//                 Sign up
//               </a>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
