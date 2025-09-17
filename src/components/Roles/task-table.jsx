// import { useEffect, useState } from "react";
// import api from "../api/axios-instance";
// import { toast } from "react-toastify";
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import getRole from "../Authentication-page/auth";

// export default function TaskTable(){
//     const CurrentUser = JSON.parse(localStorage.getItem("userData") || "{}");
//     const role = getRole();
//     const [allTasks, setAllTasks] = useState([]);
//     const [currentUserTasks , setCurrentUserTasks] = useState([]);
//     const location = useLocation();
//     const onDashboard = location.pathname === "/portal/dashboard";          
//     const tasksToDisplay = onDashboard ? allTasks.slice(-5) : allTasks;
//     const [showPopUpId , setShowPopUpId] = useState(null);
//     const [showMoreInfo ,setShowMoreInfo] = useState(false);
//     const [infoTask, setInfoTask] = useState(null);
//     const [showUpdateStatePopUp,setShowUpdateStatePopUp] = useState(false);
//     const [updatedTaskStatus , setUpdatedTaskStatus] = useState({status: null});
//     const [showDeletePrompt, setShowDeletePrompt] = useState(false);
//     const [showCommentPopUp,setShowCommentPopUp] = useState(false);
//     const [activeTaskId, setActiveTaskId] = useState(null);
//     const [filterText, setFilterText] = useState('');
//     const [filteredTasks ,setFilteredTasks] = useState([]);
//     const [comment, setComment]= useState({
//             text:null,
//             userId:CurrentUser.id
//          });

//     async function getTasks(){
//                     const res = await api.get("api/tasks");
//                     setAllTasks(res.data);
                    
//                     if(role === 'engineer'){
//                     await setCurrentUserTasks(res.data.filter((myTasks) =>
//                         myTasks.assignedTo && myTasks.assignedTo.fullName === CurrentUser.fullName
//                     ))
//                     setFilteredTasks(currentUserTasks);
//                 }
//                 else if(role === "admin" || role === "supervisor"){
//                     setCurrentUserTasks(res.data.filter((myTasks) =>
//                         myTasks.assignedBy && myTasks.assignedBy.fullName === CurrentUser.fullName
//                     ))
//                     setFilteredTasks(allTasks);
//                 }
                    
//     }
//          useEffect(()=>{
//                 getTasks();
//                 console.log(allTasks);
//          },[]);

// useEffect(() => {
//   if (filterText && ['pending', 'in_progress', 'fixed', 'cannot_fix'].includes(filterText)) {
//     setFilteredTasks(allTasks.filter(task => task.status === filterText));
//   }else if(filterText == 'my_tasks'){
//     setFilteredTasks(currentUserTasks);
//   } 
//   else if( role === 'engineer') {
//     setFilteredTasks(currentUserTasks);
//   }
//   else{
//     setFilteredTasks(allTasks);
//   }
// }, [filterText, allTasks]);


//          function HandleTaskOnClick(taskId){
//         setActiveTaskId(taskId);
//         setShowPopUpId(prev => (prev === taskId ? null : taskId));

//     }

//  async function HandleCommentSubmit(){
//         console.log(comment);
//         try{
//              const response = await api.post(`api/tasks/${activeTaskId}/comment`, comment);
//         console.log(response.data);
//         toast.success(response.data.message || 'Comment successful');
//         getTasks();
//         }
//         catch(error){
//             console.log("unable to comment:", error)
//             console.log(error?.response?.data?.message || 'Unable to comment')
//         }
//         finally{
//             setComment({
//                 text: null,
//                 userId: CurrentUser.id
//             })
//         }
//      }

//     async function ConfirmDelete (){
//         try{
//         const response = await api.delete(`api/tasks/${activeTaskId}`);
//         console.log(response.data);
//         toast.success(response.data.message || 'Task deleted successfully')

//         }
//         catch(error){
//             console.log(error)
//             toast.error(error?.response?.data?.message || 'Error deleting Task')
//         }
//         finally{
//             getTasks();
//             setShowDeletePrompt(false);
//         }
//     }

//     async function HandleUpdateStateSubmit(){
//         console.log(updatedTaskStatus)
//         try{
//             const res = await api.patch(`api/tasks/${activeTaskId}`, updatedTaskStatus);
//             console.log(res.data);
//             toast.success(res.data.message || 'Task state updated successfully')
//         }
//     catch(error){
//         console.log(error);
//         toast.error(error?.response?.data?.message || 'Could not update task state')
//     }
//     finally{
//         getTasks();
//         setShowUpdateStatePopUp(false)
//     }
//     }

// return(
//     <>
//     <div className="table-div">
//         <h1>{onDashboard ? `Latest tasks ` : (
//         <>
//         <select name='filterText'
//         value={filterText}
//         onChange={(e)=> setFilterText(e.target.value)}
//         className="filter-select">
//          {['admin', 'supervisor'].includes(role) &&
//          <option value="all_tasks">All Tasks</option>
//          } 
//           <option value="my_tasks">My Tasks</option>
//           <option value="pending">Pending</option>
//           <option value="fixed">Completed</option>
//           <option value="in_progress">In Progress</option>
//           <option value="cannot_fix">Cannot Fix</option>
//         </select>
        
//         </>)}</h1>
//     <table>
//         <thead>
//             <tr>
//                 {onDashboard ? (
//                 <>
//                 <th>Property ID</th>
//                 <th>Date Assigned</th>
//                 <th>Assigned To</th>
//                 <th>Assigned By</th>
//                 <th>Status</th>
//                 </>
//                 )
//                 :
//                 (
//                     <>
//                     {['admin', 'supervisor'].includes(role) ? (

//                 <>
//                 <th>Property ID</th>
//                 <th>Date Assigned</th>
//                 <th>Assigned To</th>
//                 <th>Assigned By</th>
//                 <th>Status</th> 
//                 </>
//                     )
//                     :
//                     (
//                     <>
//                 <th>Property ID</th>
//                 <th>Date Assigned</th>
//                 <th>Assigned To(you)</th>
//                 <th>Assigned By</th>
//                 <th>Status</th>
//                     </>
//                     )
                        
//                     }
//                     </>
//                 )
//             }
                
//             </tr>
//         </thead>
//         <tbody>
//             {onDashboard && Array.isArray(tasksToDisplay) ? tasksToDisplay.map(task =>(
//                 <tr key={task._id}>
//                     <td>{task.property?.propertyId}</td>
//                     <td>{task.updatedAt.split('T')[0]}</td>
//                     <td>{task.assignedTo?.fullName}</td>
//                     <td>{task.assignedBy?.fullName}</td>
//                     <td>
//                         <span>
//                             {task.status}
//                             <button onClick={()=> HandleTaskOnClick(task._id)}
//                             className="more-options"
//                             >
//                                 :
//                             </button>
//                             {showPopUpId === task._id && (
//                                             <div className='pop-up-div'>
//                                                 <button onClick={()=>
//                                                 {setShowCommentPopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>Comment</button>
//                                                 <button onClick={()=>
//                                                 {setShowUpdateStatePopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>
//                                                 Update state
//                                                 </button>
//                                                 <button onClick={()=> {
//                                                         setShowDeletePrompt(true);
//                                                         setShowPopUpId(null);
//                                                  ;
//                                                     }}>Delete Task
//                                                     </button>
//                                                 <button onClick={()=>{
//                                                 setShowMoreInfo(true);
//                                                 setInfoTask(task);
//                                                 setShowPopUpId(null);}}>
//                                                 More info
//                                                 </button>
//                                             </div>
//                                         )}
//                         </span>
//                     </td>
//                 </tr>
//             )):(
//                 <>
//                 {['admin', 'supervisor'].includes(role) && Array.isArray(filteredTasks) && filteredTasks.map(task =>
//                     (
//                     <tr key={task._id}>
//                     <td>{task.property?.propertyId}</td>
//                     <td>{task.updatedAt.split('T')[0]}</td>
//                     <td>{task.assignedTo?.fullName}</td>
//                     <td>{task.assignedBy?.fullName}</td>
//                     <td>
//                         <span>
//                             {task.status}
//                             <button onClick={()=> HandleTaskOnClick(task._id)}
//                             className="more-options"
//                             >
//                                 :
//                             </button>
//                             {showPopUpId === task._id && (
//                                             <div className='pop-up-div'>
//                                                 <button onClick={()=>
//                                                 {setShowCommentPopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>Comment</button>
//                                                 <button onClick={()=>
//                                                 {setShowUpdateStatePopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>
//                                                 Update state
//                                                 </button>
//                                                 <button onClick={()=> {
//                                                         setShowDeletePrompt(true);
//                                                         setShowPopUpId(null);
//                                                  ;
//                                                     }}>Delete Task
//                                                     </button>
//                                                 <button onClick={()=>{
//                                                 setShowMoreInfo(true);
//                                                 setInfoTask(task);
//                                                 setShowPopUpId(null);}}>
//                                                 More info
//                                                 </button>
//                                             </div>
//                                         )}
//                         </span>
//                     </td>

                    
//                     </tr>
//                     )
//                 )
//                 }
//                 {role === 'engineer' && Array.isArray(filteredTasks) && filteredTasks.map(task =>
//                     (
//                     <tr key={task._id}>
//                     <td>{task.property?.propertyId}</td>
//                     <td>{task.updatedAt.split('T')[0]}</td>
//                     <td>{task.assignedTo?.fullName}</td>
//                     <td>{task.assignedBy?.fullName}</td>
//                     <td>
//                         <span>
//                             {task.status}
//                             <button onClick={()=> HandleTaskOnClick(task._id)}
//                             className="more-options"
//                             >
//                                 :
//                             </button>
//                             {showPopUpId === task._id && (
//                                             <div className='pop-up-div'>
//                                                 <button onClick={()=>
//                                                 {setShowCommentPopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>Comment</button>
//                                                 <button onClick={()=>
//                                                 {setShowUpdateStatePopUp(true);
//                                                 setShowPopUpId(null);
//                                                 }}>
//                                                 Update state
//                                                 </button>
//                                                 <button onClick={()=> {
//                                                         setShowDeletePrompt(true);
//                                                         setShowPopUpId(null);
//                                                  ;
//                                                     }}>Delete Task
//                                                     </button>
//                                                 <button onClick={()=>{
//                                                 setShowMoreInfo(true);
//                                                 setInfoTask(task);
//                                                 setShowPopUpId(null);}}>
//                                                 More info
//                                                 </button>
//                                             </div>
//                                         )}
//                         </span>
//                     </td>

                    
//                     </tr>
//                     )
//                 )

//                 }
//                 </>

//             )
//             }
//         </tbody>
//     </table>
//     {allTasks.length > 5 && onDashboard && ['admin', 'supervisor'].includes(role)(
//   <>
//   <Link to='/portal/tasks' className="view-more-link"> View more <FontAwesomeIcon icon={faArrowRight} /></Link>
//   </>
// )

// }
// {!onDashboard && (
//           <>
//           {filteredTasks.length} out of {allTasks.length}
//           </>
//         )}
//     </div>
// {showUpdateStatePopUp && (
//                 <>
//                 <div className='form-overlay'>
//            <div className="confirm-delete">
//            <button onClick={()=> setShowUpdateStatePopUp(false)}
//             className='close-pop-up-button'>X</button>
//             <select name="updatedTaskStatus"
//           value={updatedTaskStatus.status}
//            onChange={(e) => setUpdatedTaskStatus({status: e.target.value})}>
//             <option value="">Select status</option>
//             <option value='in_progress'>In progress</option>
//             <option value='pending'>Pending</option>
//             <option value='fixed'>Completed</option>
//             <option value='cannot_fix'>Cannot Fix</option>
//           </select>
//           <input type="submit"
//             onClick={HandleUpdateStateSubmit}
//             className="submit"
//             value='Update State'
//           />
//         </div>
//         </div>
//                 </>
//             )}
//             {showCommentPopUp && (
//    <div className='form-overlay'>
//      <div className='confirm-delete'>
//       <button  onClick={()=>
//          setShowCommentPopUp(false)}
//           className='close-pop-up-button'>
//             X
//        </button>
//             <label htmlFor="comment">
//          Comment
//         </label>
//         <textarea
//         value={comment.text}
//         onChange={(e) =>
//         setComment(prev => ({...prev, text: e.target.value}))} />

//        <input type="submit" className='submit' onClick={HandleCommentSubmit} value="Comment" />
//         </div>

//       </div>
//        )}
// {showDeletePrompt && (
//     <>
//     <div className='form-overlay'>
//       <div className='confirm-delete'>
//         <button onClick={() => setShowDeletePrompt(false)}
//             className='close-pop-up-button'>
//         X
//       </button>
//       <div>
//         <span>Are you sure you want to delete this task?</span>
//       <button onClick={ConfirmDelete} className="confirm-delete-button">Confirm delete</button>
//       </div>
//   </div>

//     </div>
//     </>
//   )
// }
// {showMoreInfo && (
//         <>
//         <div className='form-overlay'>
//             <div className='confirm-delete'>

//                 <button onClick={()=> setShowMoreInfo(false)}
//                     className='close-pop-up-button'>X</button>
//             {['admin', 'supervisor'].includes(role) &&(
//                 <>
//                 <p className="property-id">{infoTask.property.propertyId}</p>
//                 <p><span className="show-more-title">Type:</span>
//                 {infoTask.property.type}
//                 </p>
//                 <p><span className="show-more-title">Address:</span>
//                     {infoTask.property.location.address}</p>
//                 <p><span className="show-more-title">Description:</span>
//                     {infoTask.report.description}</p>
//                 <p><span className="show-more-title">Status:</span>
//                     {infoTask.status}</p>
//                 <p> <span className="show-more-title">Assigned to:</span>
//                     {infoTask.assignedTo.fullName}</p>
//                 <p> <span className="show-more-title">Date Assigned:</span>
//                     {infoTask.updatedAt.split('T')[0]}</p>
//                 <p>
//                     <Link
//                 to ={`https://www.google.com/maps?q=${infoTask.property.location.coordinates.lat},${infoTask.property.location.coordinates.lng}`}
//                 target="_blank" >
//                 Get directions to property
//                 </Link>
//                 </p>
//                 </>
//             )

//             }
//             {showMoreInfo && role === 'engineer' && (
//                 <>
//                 <p className="property-id">{infoTask.property.propertyId}</p>
//                 <p><span className="show-more-title">Type:</span> 
//                 {infoTask.property.type}.
//                 </p>
//                 <p><span className="show-more-title">Address:</span>
//                     {infoTask.property.location.address}.</p>
//                 <p><span className="show-more-title">Description:</span>
//                     {infoTask.report.description}.</p>
//                 <p><span className="show-more-title">Status:</span>
//                     {infoTask.status}.</p>
//                 <p> <span className="show-more-title">Assigned by:</span>
//                     {infoTask.assignedBy.fullName}.</p>
//                 <p> <span className="show-more-title">Date Assigned:</span>
//                     {infoTask.updatedAt.split('T')[0]}.</p>
//                 <p>
//                     <Link
//                 to ={`https://www.google.com/maps?q=${infoTask.property.location.coordinates.lat},${infoTask.property.location.coordinates.lng}`}
//                 target="_blank">
//                 Get directions to property
//                 </Link>
//                 </p>
//                 </>
//             )
//             }
//         </div>

//         </div>
//         </>
//     )
// }

      


//     </>
// )
// }

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { 
  Search,
  CheckSquare,
  Clock,
  User as UserIcon,
  AlertTriangle,
  CheckCircle,
  Play,
  Pause,
  Eye,
  Edit,
  MessageSquare,
  Paperclip
} from 'lucide-react'
import api from '../api/axios-instance'

export default function Tasks() {
  const user = JSON.parse(localStorage.getItem('userData') || '{}')
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [assigneeFilter, setAssigneeFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    async function loadData() {
      try {
        const [tasksData, usersData] = await Promise.all([
          api.get('api/tasks').then(res => res.data),
          api.get('api/users').then(res => res.data.accounts)
        ])
        setTasks(tasksData)
        setUsers(usersData)
        setFilteredTasks(tasksData)
      } catch (error) {
        console.error('Failed to load tasks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    let filtered = tasks

    // Filter by user role
    if (user.role === 'engineer') {
      filtered = filtered.filter(task => task.assignedToUserId === user?.id)
    }

    if (searchTerm) {
      filtered = filtered.filter(task => {
        const assignedUser = users.find(u => u.id === task.assignedToUserId)
        return assignedUser?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               task.id.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(task => task.status === statusFilter)
    }

    if (assigneeFilter !== 'all') {
      filtered = filtered.filter(task => task.assignedToUserId === assigneeFilter)
    }

    setFilteredTasks(filtered)
    setCurrentPage(1)
  }, [tasks, users, searchTerm, statusFilter, assigneeFilter, user.role, user])

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-700" />
      case 'in_progress':
        return <Play className="w-4 h-4 text-blue-600" />
      case 'blocked':
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <CheckSquare className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'completed':
      case 'verified':
        return 'success'
      case 'blocked':
        return 'error'
      case 'in_progress':
        return 'default'
      case 'pending':
        return 'warning'
      default:
        return 'outline'
    }
  }

  const getCompletionPercentage = (checklist) => {
    const completed = checklist.filter(item => item.done).length
    return Math.round((completed / checklist.length) * 100)
  }

  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage)

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
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
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-600">
            {user.role === 'engineer' ? 'Manage your assigned tasks' : 'Coordinate and monitor task progress'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="text-sm">
            Total: {filteredTasks.length}
          </Badge>
          {user.role === 'engineer' && (
            <Badge variant="success" className="text-sm">
              My Tasks: {filteredTasks.filter(t => t.assignedToUserId === user?.id).length}
            </Badge>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Pending</p>
                <p className="text-2xl font-bold text-blue-900">
                  {filteredTasks.filter(t => t.status === 'pending').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-700">In Progress</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {filteredTasks.filter(t => t.status === 'in_progress').length}
                </p>
              </div>
              <Play className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Completed</p>
                <p className="text-2xl font-bold text-green-900">
                  {filteredTasks.filter(t => t.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Blocked</p>
                <p className="text-2xl font-bold text-red-900">
                  {filteredTasks.filter(t => t.status === 'blocked').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
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
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="blocked">Blocked</option>
              <option value="completed">Completed</option>
              <option value="verified">Verified</option>
            </select>

            {user.role !== 'engineer' && (
              <select
                value={assigneeFilter}
                onChange={(e) => setAssigneeFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Assignees</option>
                {users.filter(u => u.role === 'engineer').map(engineer => (
                  <option key={engineer.id} value={engineer.id}>
                    {engineer.name}
                  </option>
                ))}
              </select>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Active: {filteredTasks.filter(t => !['completed', 'verified'].includes(t.status)).length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedTasks.map((task) => {
          const assignedUser = users.find(u => u.id === task.assignedToUserId)
          const completionPercentage = getCompletionPercentage(task.checklist)

          return (
            <Card key={task.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(task.status)}
                    <CardTitle className="text-lg">Task #{task.id.slice(-6)}</CardTitle>
                  </div>
                  <Badge variant={getStatusBadgeVariant(task.status)}>
                    {task.status.replace('_', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Assigned to:</span>
                    <span className="font-medium">{assignedUser?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Created:</span>
                    <span className="font-medium">{task.createdAt}</span>
                  </div>
                  {task.slaHours && (
                    <div className="flex items-center justify-between">
                      <span>SLA:</span>
                      <span className="font-medium">{task.slaHours}h</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Checklist:</p>
                  <div className="space-y-1">
                    {task.checklist.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className={`w-3 h-3 rounded border ${
                          item.done ? 'bg-green-500 border-green-500' : 'border-gray-300'
                        }`}>
                          {item.done && <CheckCircle className="w-2 h-2 text-white" />}
                        </div>
                        <span className={item.done ? 'line-through text-gray-500' : 'text-gray-700'}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                    {task.checklist.length > 3 && (
                      <p className="text-xs text-gray-500">+{task.checklist.length - 3} more items</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-1">
                    {task.notes.length > 0 && (
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MessageSquare className="w-3 h-3" />
                        <span>{task.notes.length}</span>
                      </div>
                    )}
                    {task.attachments.length > 0 && (
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Paperclip className="w-3 h-3" />
                        <span>{task.attachments.length}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
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
    </div>
  )
}