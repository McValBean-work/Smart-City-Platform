// import { useState , useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import api from '../api/axios-instance';
// import { toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';

// export function UserSearchBar(){

//   const [searchedUser, setSearchedUser] = useState();
//    const [searchResults, setSearchResults] = useState();
  

//   function GetSearchedUser(){

//           console.log(searchedUser);
//           setSearchResults(allUsers.filter(user => user.fullName.toLowerCase().includes(searchedUser.toLowerCase())));
//         }

//         console.log(searchResults);

//   return(
//     <>
//      <div className=''>
//           <button onClick={GetSearchedUser} className=''>
//             <FontAwesomeIcon icon ={faMagnifyingGlass} className ='' />
//           </button>
//           <input type="text"
//           placeholder="Enter user name here"
//           value={searchedUser}
//           onChange={ (e) =>
//             {setSearchedUser(e.target.value); {GetSearchedUser} }
//           } />
//           <button className='' onClick={() => {setSearchedUser(''); setSearchResults('')}}>X</button>
//         </div>
//         {Array.isArray(searchResults) && (
//           <div className="">
//              { searchResults.map(result => (
//              <span>
//              <a href={`#${result._id}`}>{result.fullName}</a>
//             </span>

//             ))}
//           </div>
//         )}
//     </>
//   )
// }

//   function UserTable(){
//         const [allUsers , setAllUsers] = useState([]);
//         const [filteredUsers ,setFilteredUsers] = useState([]);
//         const location = useLocation();
//         const onDashboard = location.pathname === "/portal/dashboard"; // or whatever your dashboard path is
//         const usersToDisplay = onDashboard ? allUsers.slice(-5) : filteredUsers;
//         const [activeUserId , setActiveUserId] = useState(null);
//         const [userToDelete, setUserToDelete] = useState(null);
//         const [showPopUpId, setShowPopUpId] = useState(null);
//         const [showDeletePrompt, setShowDeletePrompt] = useState(null);
//         const [showMoreInfoUser, setShowMoreInfoUser] = useState(null);
//         const [filterText, setFilterText] = useState('');
        
        
//        console.log(filteredUsers)
        
//         const [userDeleteEmail, setUserDeleteEmail] = useState({
//             email:null
//         });
        

//         async function getUsers() {
//                 const response = await api.get("api/users");
//                 setAllUsers(response.data.accounts);
//                 setFilteredUsers(response.data.accounts);

//                 console.log("this is all users set use state", allUsers);
//             }
//                 useEffect(()=>{
//                     getUsers();
//                     console.log("useEffect get users called");
//                     },[]);
                    
//   useEffect(() => {
//   if (filterText && ['admin', 'supervisor', 'engineer'].includes(filterText)) {
//     setFilteredUsers(allUsers.filter(user => user.role === filterText));
//   } else {
//     setFilteredUsers(allUsers);
//   }
// }, [filterText, allUsers]);





//         function HandleUserOnClick(userEmail, userId){
//             console.log(userId);
//             console.log(userEmail);

//             setUserDeleteEmail(
//                 { email: userEmail}
//             );
//             setActiveUserId(userId);
//             setShowPopUpId(prev => (prev === userId ? null : userId));
//         }

//         async function HandleDeleteUser(){
//             console.log(userDeleteEmail);
//             console.log('active user id is', activeUserId)
//             try{
//                 const res = await api.delete('api/users',  {data: userDeleteEmail});
//                 console.log(res.data);
//                 toast.success(res.data.message || 'Deleted Successfully');
//             }
//             catch(error){
//                 console.log(error);
//                 toast.error(error?.response.data.message);
//             }
//             finally{
//                 await getUsers();
//                 setActiveUserId(null);
//                 setShowDeletePrompt(false);
//             }
//         }

//     function HandleMoreInfoOnClick(user){
//         console.log(user);
//         setShowMoreInfoUser(user);
//     }

//     return(
//         <>
       
//         <div className="">

//         <h1>{onDashboard ? `Latest Users`
//         : (
//         <>
//         <select name='filterText'
//         value={filterText}
//         onChange={(e)=> setFilterText(e.target.value)}
//         className="">
//           <option value="all_users">All Users</option>
//           <option value="admin">Admins</option>
//           <option value="supervisor">Supervisors</option>
//           <option value="engineer">Engineers</option>
//         </select>
//         </>)}</h1>
//         <table>
//             <tr>
//                 <th>Role</th>
//                 <th>FullName</th>
//                 <th>Email Address</th>
//             </tr>
//              {Array.isArray(usersToDisplay) &&
//        usersToDisplay.map((user)=>(
//         <tr key={user._id} id={user._id}>
//             <td>{user.role}</td>
//             <td>{user.fullName}</td>
//             <td>
//                 <span>
//                     {user.email}
//                 <button
//                 className=''
//                 onClick={() =>HandleUserOnClick(user.email , user._id)}>:</button>
//                 {showPopUpId === user._id && (
//                                     <div className=''>
//                                       <button
//                                         className="delete"
//                                         onClick={() => {
//                                           setShowDeletePrompt(true);
//                                           setShowPopUpId(null);
//                                           setUserToDelete(user.fullName);
//                                           setActiveUserId(user._id);
//                                         }}>
//                                         delete user
//                                       </button>
//                                       <button onClick={()=> HandleMoreInfoOnClick(user)}>
//                                         More Info
//                                       </button>
//                                     </div>
//                                   )}
//                 </span>
//             </td>
//         </tr>
//         ))
//        }
//         </table>
//         {allUsers.length > 5 && onDashboard && (
        
          
//         <>
//         <Link to='/portal/user-management' className=""> View more <FontAwesomeIcon icon={faArrowRight} /></Link>
//         </>
      
          
//           )}
//           {!onDashboard && (
//           <>
//           {filteredUsers.length} out of {allUsers.length}
//           </>
//         )}
        
//         </div>
//         {showDeletePrompt && (
//         <div className='form-overlay'>
//            <div className="">

//               <button onClick={()=> setShowDeletePrompt(false)}
//                 className=''>X</button>
//             <div>
//               <span>Are you sure you want to delete {userToDelete}'s account?</span>
//           <button
//             onClick={HandleDeleteUser}
//             className=""
//           >
//             Confirm Delete
//           </button>

//             </div>

//         </div>
//         </div>

//       )}
//     {showMoreInfoUser && (
//         <div className=''>
//            <div className="">
//             <button onClick={()=> setShowMoreInfoUser(null)}
//               className=''>X</button>
            
//             <ul style={{ listStyle: 'none', paddingLeft: '10px' }}>
//           <li><span className=''>Full Name:</span>  {showMoreInfoUser.fullName}</li>
//           <li><span className=''>Email address:</span> {showMoreInfoUser.email}</li>
//           <li><span className=''>Phone number:</span> {showMoreInfoUser.phoneNumber}</li>
//           <li><span className=''>Role:</span> {showMoreInfoUser.role}</li>
//           <li><span className=''>Date joined:</span> {showMoreInfoUser.createdAt.split("T")[0]}</li>
//         </ul>

            
//         </div>
//         </div>

//       )}
      
      
      
//         </>
//     )

// }

// export default UserTable;




// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
// import { Badge } from '../../components/ui/badge'
// import { Button } from '../../components/ui/button'
// import { Input } from '../../components/ui/input'
// import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
// import api from '../api/axios-instance'
// import NewUserForm from '../Authentication-page/sign-up'
// import { toast } from 'react-toastify'
// import { 
//   Search,
//   Users as UsersIcon,
//   Shield,
//   Wrench,
//   Crown,
//   Plus,
//   Edit,
//   Trash2,
//   Eye,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar
// } from 'lucide-react'

// export function UsersPage() {
//   const [users, setUsers] = useState([])
//   const [filteredUsers, setFilteredUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [roleFilter, setRoleFilter] = useState('all')
//   const [currentPage, setCurrentPage] = useState(1)
//   const [showNewUserForm, setShowNewUserForm] = useState(false)
//   const [showDeletePrompt, setShowDeletePrompt] = useState(false)
//   const [userToDelete, setUserToDelete] = useState(null)
//   const [activeUserId, setActiveUserId] = useState(null)
//   const [showMoreInfoUser, setShowMoreInfoUser] = useState(null)
//   const [userDeleteEmail, setUserDeleteEmail] = useState({ email: null })
  

//   const itemsPerPage = 12

//   useEffect(() => {
//     async function loadUsers() {
//       try {
//         const data = await api.get('/api/users').then(res => res.data.accounts)
//         console.log('Fetched users:', data)
//         setUsers(data)
//         setFilteredUsers(data)
//       } catch (error) {
//         console.error('Failed to load users:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadUsers()
//   }, [])

//   useEffect(() => {
//     let filtered = users

//     if (searchTerm) {
//       filtered = filtered.filter(user =>
//         user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     if (roleFilter !== 'all') {
//       filtered = filtered.filter(user => user.role === roleFilter)
//     }


//     setFilteredUsers(filtered)
//     setCurrentPage(1)
//   }, [users, searchTerm, roleFilter])

//           function HandleUserOnClick(userEmail, userId){
//             console.log(userId);
//             console.log(userEmail);

//             setUserDeleteEmail(
//                 { email: userEmail}
//             );
//             setActiveUserId(userId);
//             setShowMoreInfoUser(prev => (prev === userId ? null : userId));
//         }

//         async function HandleDeleteUser(){
//             console.log(userDeleteEmail);
//             console.log('active user id is', activeUserId)
//             try{
//                 const res = await api.delete('api/users',  {data: userDeleteEmail});
//                 console.log(res.data);
//                 toast.success(res.data.message || 'Deleted Successfully');
//             }
//             catch(error){
//                 console.log(error);
//                 toast.error(error?.response.data.message);
//             }
//             finally{
//                 await users();
//                 setActiveUserId(null);
//                 setShowDeletePrompt(false);
//             }
//         }

//     function HandleMoreInfoOnClick(user){
//         console.log(user);
//         setShowMoreInfoUser(user);
//     }

//   const getRoleIcon = (userRole) => {
//     switch (userRole) {
//       case 'admin':
//         return <Crown className="w-4 h-4 text-blue-600" />
//       case 'supervisor':
//         return <Shield className="w-4 h-4 text-green-600" />
//       case 'engineer':
//         return <Wrench className="w-4 h-4 text-orange-600" />
//       default:
//         return <UsersIcon className="w-4 h-4 text-gray-600" />
//     }
//   }

//   const getRoleBadgeVariant = (userRole) => {
//     switch (userRole) {
//       case 'admin':
//         return 'default'
//       case 'supervisor':
//         return 'success'
//       case 'engineer':
//         return 'warning'
//       default:
//         return 'outline'
//     }
//   }

//   const paginatedUsers = filteredUsers.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   )

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

//   if (loading) {
//     return (
//       <div className="p-6">
//         <div className="animate-pulse space-y-6 h-screen">
//           <div className="h-8 bg-gray-200 rounded w-64"></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(9)].map((_, i) => (
//               <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Users</h1>
//           <p className="text-gray-600">
//             Manage team members and their access permissions
//           </p>
//         </div>
        
//           <Button className="flex items-center space-x-2" onClick={() => setShowNewUserForm(true)}>
//             <Plus className="w-4 h-4" />
//             <span>Add User</span>
//           </Button>
//       </div>
//       {showNewUserForm && (
//         <div className="fixed inset-0 bg-black/40 bg-opacity-50 min-h-screen w-full flex items-center justify-center z-50">
          
//             <NewUserForm onClose={() => setShowNewUserForm(false)} />
            
//             </div>)}

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-blue-700">Total Users</p>
//                 <p className="text-2xl font-bold text-blue-900">{users.length}</p>
//               </div>
//               <UsersIcon className="w-8 h-8 text-blue-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-orange-700">Engineers</p>
//                 <p className="text-2xl font-bold text-orange-900">
//                   {users.filter(u => u.role === 'engineer').length}
//                 </p>
//               </div>
//               <Wrench className="w-8 h-8 text-orange-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-green-700">Supervisors</p>
//                 <p className="text-2xl font-bold text-green-900">
//                   {users.filter(u => u.role === 'supervisor').length}
//                 </p>
//               </div>
//               <Shield className="w-8 h-8 text-green-600" />
//             </div>
//           </CardContent>
//         </Card>

        

//         <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
//           <CardContent className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-purple-700">Admins</p>
//                 <p className="text-2xl font-bold text-purple-900">
//                   {users.filter(u => u.role === 'admin').length}
//                 </p>
//               </div>
//               <Crown className="w-8 h-8 text-purple-600" />
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Filters */}
//       <Card>
//         <CardContent className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="relative">
//               <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <Input
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>

//             <select
//               value={roleFilter}
//               onChange={(e) => setRoleFilter(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               <option value="all">All Roles</option>
//               <option value="admin">Admin</option>
//               <option value="supervisor">Supervisor</option>
//               <option value="engineer">Engineer</option>
//             </select>

//             <div className="flex items-center space-x-4 text-sm text-gray-600">
//               <span>Found: {filteredUsers.length}</span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Users Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {paginatedUsers.map((user) => (
//           <Card key={user.id} className="hover:shadow-lg transition-shadow">
//             <CardHeader className="pb-3">
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center space-x-3">
//                   <Avatar className="w-12 h-12">
//                     <AvatarImage src={`https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg`} />
//                     <AvatarFallback>
//                       {user.fullName}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <CardTitle className="text-lg">{user.name}</CardTitle>
//                     <div className="flex items-center space-x-2">
//                       {getRoleIcon(user.role)}
//                       <Badge variant={getRoleBadgeVariant(user.role)}>
//                         {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
//                       </Badge>
//                     </div>
//                   </div>
//                 </div>
                
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div className="flex items-center space-x-2">
//                   <Mail className="w-4 h-4" />
//                   <span>{user.email}</span>
//                 </div>
//                 {user.phoneNumber && (
//                   <div className="flex items-center space-x-2">
//                     <Phone className="w-4 h-4" />
//                     <span>{user.phoneNumber}</span>
//                   </div>
//                 )}
//                 <div className="flex items-center space-x-2">
//                   <Calendar className="w-4 h-4" />
//                   <span>Joined {user.createdAt.split('T')[0]}</span>
//                 </div>
//               </div>

//               <div className="flex space-x-2 pt-2">
//                 <Button size="sm" variant="outline" className="flex-1" onClick={() => {setShowMoreInfoUser(user); setActiveUserId(user._id)}}>
//                   <Eye className="w-4 h-4 mr-1" />
//                   View
//                 </Button>
                
                  
//                     <Button size="sm" variant="outline" className="flex-1">
//                       <Edit className="w-4 h-4 mr-1" />
//                       Edit
//                     </Button>
//                     <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50" onClick={() => {
//                       setShowDeletePrompt(true);
//                       setUserToDelete(user.fullName);
//                       setActiveUserId(user._id);
//                     }}>
//                       <Trash2 className="w-4 h-4" />
//                     </Button>
//         {showDeletePrompt && (
//         <div className='flex justify-center items-center fixed inset-0 bg-black/40 bg-opacity-50 min-h-screen w-full z-50'>
//            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg space-y-4 w-9/10 sm:w-100">

//               <button onClick={()=> setShowDeletePrompt(false)}
//                 className='flex text-right text-semibold'>X</button>
//             <div>
//               <span>Are you sure you want to delete {userToDelete}'s account?</span>
//           <button
//             onClick={HandleDeleteUser}
//             className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Confirm Delete
//           </button>

//             </div>

//         </div>
//         </div>

//       )}
//     {showMoreInfoUser && (
//         <div className=''>
//            <div className="">
//             <button onClick={()=> setShowMoreInfoUser('')}
//               className=''>X</button>
            
//             <ul className='grid gap-2' style={{ listStyle: 'none', paddingLeft: '10px' }}>
//           <li><span className='text-semibold'>Full Name:</span>  {showMoreInfoUser.fullName}</li>
//           <li><span className='text-semibold'>Email address:</span> {showMoreInfoUser.email}</li>
//           <li><span className='text-semibold'>Phone number:</span> {showMoreInfoUser.phoneNumber}</li>
//           <li><span className='text-semibold'>Role:</span> {showMoreInfoUser.role}</li>
//           <li><span className='text-semibold'>Date joined:</span> {showMoreInfoUser.createdAt.split("T")[0]}</li>
//         </ul>

            
//         </div>
//         </div>

//       )}
      
      
  
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-center space-x-2">
//           <Button
//             variant="outline"
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </Button>
//           <span className="text-sm text-gray-600">
//             Page {currentPage} of {totalPages}
//           </span>
//           <Button
//             variant="outline"
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
import api from '../api/axios-instance'
import NewUserForm from '../Authentication-page/sign-up'
import { toast } from 'react-toastify'
import { 
  Search,
  Users as UsersIcon,
  Shield,
  Wrench,
  Crown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  Calendar
} from 'lucide-react'

export function UsersPage() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showNewUserForm, setShowNewUserForm] = useState(false)

  // 🔥 single modal state
  const [showDeletePrompt, setShowDeletePrompt] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null) // whole user object

  const [showMoreInfoUser, setShowMoreInfoUser] = useState(null)

  const itemsPerPage = 12

  // 🔄 reusable loader
  const loadUsers = async () => {
    try {
      const res = await api.get('/api/users')
      const data = res.data.accounts
      setUsers(data)
      setFilteredUsers(data)
    } catch (error) {
      console.error('Failed to load users:', error)
      toast.error('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  useEffect(() => {
    let filtered = users

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (roleFilter !== 'all') {
      filtered = filtered.filter(user => user.role === roleFilter)
    }

    setFilteredUsers(filtered)
    setCurrentPage(1)
  }, [users, searchTerm, roleFilter])

  async function HandleDeleteUser() {
    if (!userToDelete) return
    try {
      // ✅ use _id from selected user
      const res = await api.delete(`api/users/${userToDelete.email}`);
  
      toast.success(res.data.message || 'Deleted successfully')
      // remove locally
      setUsers(prev => prev.filter(u => u._id !== userToDelete._id))
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message || 'Delete failed')
    } finally {
      setShowDeletePrompt(false)
      setUserToDelete(null)
    }
  }

  const getRoleIcon = (userRole) => {
    switch (userRole) {
      case 'admin':
        return <Crown className="w-4 h-4 text-blue-600" />
      case 'supervisor':
        return <Shield className="w-4 h-4 text-green-600" />
      case 'engineer':
        return <Wrench className="w-4 h-4 text-orange-600" />
      default:
        return <UsersIcon className="w-4 h-4 text-gray-600" />
    }
  }

  const getRoleBadgeVariant = (userRole) => {
    switch (userRole) {
      case 'admin':
        return 'default'
      case 'supervisor':
        return 'success'
      case 'engineer':
        return 'warning'
      default:
        return 'outline'
    }
  }

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6 h-screen">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">
            Manage team members and their access permissions
          </p>
        </div>
        <Button className="flex items-center space-x-2" onClick={() => setShowNewUserForm(true)}>
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </Button>
      </div>

      {showNewUserForm && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 min-h-screen w-full flex items-center justify-center z-50">
          <NewUserForm onClose={() => setShowNewUserForm(false)} />
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Total Users</p>
              <p className="text-2xl font-bold text-blue-900">{users.length}</p>
            </div>
            <UsersIcon className="w-8 h-8 text-blue-600" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-700">Engineers</p>
              <p className="text-2xl font-bold text-orange-900">
                {users.filter(u => u.role === 'engineer').length}
              </p>
            </div>
            <Wrench className="w-8 h-8 text-orange-600" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Supervisors</p>
              <p className="text-2xl font-bold text-green-900">
                {users.filter(u => u.role === 'supervisor').length}
              </p>
            </div>
            <Shield className="w-8 h-8 text-green-600" />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Admins</p>
              <p className="text-2xl font-bold text-purple-900">
                {users.filter(u => u.role === 'admin').length}
              </p>
            </div>
            <Crown className="w-8 h-8 text-purple-600" />
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="supervisor">Supervisor</option>
              <option value="engineer">Engineer</option>
            </select>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Found: {filteredUsers.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedUsers.map((user) => (
          <Card key={user._id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg" />
                    <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{user.fullName}</CardTitle>
                    <div className="flex items-center space-x-2">
                      {getRoleIcon(user.role)}
                      <Badge variant={getRoleBadgeVariant(user.role)}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                {user.phoneNumber && (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{user.phoneNumber}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.createdAt.split('T')[0]}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowMoreInfoUser(user)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-600 hover:bg-red-50"
                  onClick={() => {
                    setShowDeletePrompt(true)
                    setUserToDelete(user)
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Global Delete Modal */}
      {showDeletePrompt && userToDelete && (
        <div className="flex justify-center items-center fixed inset-0 bg-black/40 min-h-screen w-full z-50">
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg space-y-4 w-96">
            <button
              onClick={() => setShowDeletePrompt(false)}
              className="self-end text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <div>
              <p>
                Are you sure you want to delete{" "}
                <span className="font-semibold">{userToDelete.fullName}</span>'s account?
              </p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowDeletePrompt(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={HandleDeleteUser}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Confirm Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Details Modal */}
      {showMoreInfoUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
            <button
              onClick={() => setShowMoreInfoUser(null)}
              className="self-end text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <ul className="grid gap-2 text-sm text-gray-700">
              <li><strong>Full Name:</strong> {showMoreInfoUser.fullName}</li>
              <li><strong>Email:</strong> {showMoreInfoUser.email}</li>
              <li><strong>Phone:</strong> {showMoreInfoUser.phoneNumber || "N/A"}</li>
              <li><strong>Role:</strong> {showMoreInfoUser.role}</li>
              <li><strong>Date Joined:</strong> {showMoreInfoUser.createdAt.split("T")[0]}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
