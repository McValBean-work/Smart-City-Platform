import api from '../api/axios-instance'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye , faEyeSlash} from "@fortawesome/free-regular-svg-icons"
import { toast } from 'react-toastify'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function NewUserForm({ onClose }){

  const initialState = {
  fullName: '',
  email: '' ,
  phoneNumber: '',
  role: '',
  password: ''
};
const [isCreating, setIsCreating]= useState(false);
const [showPassword , setShowPassword] = useState(false);
const [newUser , setNewUser] = useState(initialState);
const [showNewUserForm, setShowNewUserForm] = useState(true);
const handleChange = (e)=>{
  const {name , value} = e.target;

    setNewUser(prev =>({...prev, [name]: value}))

}
 const SignUpSubmit = (e)=> {
  e.preventDefault()
  console.log(newUser);
  setIsCreating(true);
try{
  const res = api.post('api/users' , newUser);
  console.log(res.message);
  toast.success(res.message || 'New user created');
}
catch(e){
  toast.error(e.response?.data?.message || 'Error creating user')
}
finally{
  setNewUser(initialState);
  setIsCreating(false)
}
 }


    return(
      <>
      {showNewUserForm && (
        <form id="SignUpForm" onSubmit={SignUpSubmit} className="flex flex-col w-9/10 p-4 rounded-lg shadow-lg bg-white sm:w-100">
      {/* <h1 className='mb-4 flex'><img src={OmniCityLogo} alt="Omni city logo" className='w-15 h-15 mr-2' />Omni City</h1> */}
      <div className='flex justify-between items-center mb-6'>
        <h2>Add New User</h2>
        <button className='right-2 text-semibold' onClick={() => {setShowNewUserForm(false); onClose();}}>
          X
        </button>
        </div>
      <div className="grid gap-4">
      <select name="role"
      value={newUser.role}
      onChange={(e) =>
        setNewUser(prev =>({...prev, role: e.target.value}))
      }
      className="mb-4 border border-gray-300 px-2 py-1 rounded" required>
        <option value="">Select role</option>
        <option value="engineer">Engineer</option>
        <option value="supervisor">Supervisor</option>
        <option value="admin">Admin</option>
      </select>
      <div className='grid gap-3'>
        <label htmlFor="fullName">Full Name</label>
      <Input type="text"
      name="fullName"
      value={newUser.fullName}
      onChange={handleChange}
      placeholder="Enter full name"
      id="firstName"
       className=" px-2 py-1" required />
      </div>
      <div className='grid gap-3'>
        <Label htmlFor="PhoneNumber">Phone Number</Label>
        <Input type="text"
      name='phoneNumber'
      value={newUser.phoneNumber}
      onChange={handleChange}
      placeholder="+233"
      id="PhoneNumber"
       className="mb-4 px-2 py-1" required/>

      </div>
      <div className='grid gap-3'>
        <Label htmlFor="signUpEmail" className='mb-1'>Email</Label>
      <Input type="email"
      name='email'
      value={newUser.email}
      onChange={handleChange}
      placeholder= "Enter email address"
      id="signUpEmail"
      className="mb-4 px-2 py-1" required/>
      </div>
      <div className='grid gap-3'>
        <label htmlFor="password" className='mb-2'>Enter Password</label>
       <div className="flex">
                        <Input id="password" type={showPassword? 'text': 'password'} value={newUser.password} name='password' placeholder='Enter Password' onChange={handleChange} required />
                      <button onClick={(e)=> {e.preventDefault();
                        setShowPassword(prev =>!prev); }} className="flex items-center z-10">
                        <FontAwesomeIcon icon={showPassword? faEyeSlash : faEye} className="text-primary ml-[-2rem]" />
                      </button>      
                      </div>
      </div>
      
      
      
      
      <Input type="submit"
      value={isCreating? 'Creating user...' : 'Create user'} className="bg-primary text-white text-xl"/>
      </div>
    </form>
      )}
    </>
    )

  }

  
  export default NewUserForm;