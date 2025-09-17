// import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// import api from "../api/axios-instance";
// import { toast } from "react-toastify";
// import GetUsers from "./get-users";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// export default function ReportsTable(){
  
//     const CurrentUser = JSON.parse(localStorage.getItem("userData") || "{}");
//   console.log(CurrentUser)

//     const InitialNewTaskState = {
//         reportId: null,
//         propertyId: null,
//         engineerId: "",
//         assignedBy: CurrentUser.id,
//       };
    
//     const [newTask, setNewTask] = useState(InitialNewTaskState);
//     const [allReports, setAllReports] = useState([]);
//     const location = useLocation();
//     const onDashboard = location.pathname === "/portal/dashboard"; 
//     const [filteredReports, setFilteredReports] = useState([]);         
//   const [loadingToast, setLoadingToast] = useState(false);
//   const reportsToDisplay = onDashboard ? allReports.slice(-5) : filteredReports;
    
//     const [filterText, setFilterText] = useState('');
//     const [showAssignTaskForm, setShowAssignTaskForm] = useState(false);
//     const [showDeletePrompt, setShowDeletePrompt] = useState(false);
//     const [showMoreInfo, setShowMoreInfo] = useState(false);
//     const [showPopUpId, setShowPopUpId] = useState(null);
//     const [activeReportId, setActiveReportId] = useState(null);
//     const [activeReport, setActiveReport] = useState(null);
//     const [allProperties, setAllProperties] = useState([]);
//     const [allTasks, setAllTasks] =useState([]);
//     const Engineers = GetUsers().filter(user => user.role === 'engineer');
    
    

//     async function getReports() {
//         setLoadingToast(true);
//         try {
//           const res = await api.get("api/reports");
//           setAllReports(res.data.reports);
//           setFilteredReports(res.data.reports);
//           console.log(res.data.reports)
//         } catch (error) {
//           console.log("Error fetching reports:", error);
//         }
//         finally{
//           setLoadingToast(false);
//         }
//       }
//       useEffect(() => {
//           getReports();
//         }, []);

//         async function getTasks(){
//                     const res = await api.get("api/tasks");
//                     setAllTasks(res.data);
//     }
//          useEffect(()=>{
//                 getTasks();
//                 console.log(allTasks);
//          },[]);

//          async function getProperties(){
//              setLoadingToast(true);
//              try{
//          const res = await api.get( "api/properties");
//              setAllProperties(res.data);
//              console.log(res.data);
//              }
//              catch(error){
//                toast.error(error?.response?.data?.message || 'Error fetching properties')
//              }
//              finally{
//                setLoadingToast(false);
//              }
             
//            }
//            useEffect(()=>{
//                getProperties();
//                console.log("use effect get properties called");
//              },[]);

//         useEffect(() => {
//           if (filterText && filterText =='assigned')  {
//             const assignedReportsId = allTasks.map(task => task.report._id);
//   setFilteredReports(allReports.filter(report => assignedReportsId.includes(report._id)));
// } else if (filterText === 'unassigned') {
//   const assignedReportsId = allTasks.map(task => task.report._id);
//   setFilteredReports(allReports.filter(report => !assignedReportsId.includes(report._id)));
// } 
// else if (filterText === 'resolved') {
//   const resolvedReportsId = allTasks.filter(task => task.status === "fixed").map(task => task.report._id);
//   console.log(resolvedReportsId);
//   setFilteredReports(allReports.filter(report => resolvedReportsId.includes(report._id)));
// }else if (filterText === 'unresolved') {
//   const resolvedReportsId = allTasks.filter(task => task.status !== "fixed").map(task => task.report._id);
//   console.log(resolvedReportsId);
//   setFilteredReports(allReports.filter(report => resolvedReportsId.includes(report._id)));
// } else {
//         setFilteredReports(allReports);
//           }
//         }, [filterText, allReports]);

//         function handleReportOptionsClick(report,reportId, propertyId) {
//           console.log(allProperties)
//     console.log(report);
//     console.log(propertyId);
//     console.log(reportId);
//     setActiveReport(report);
//     setActiveReportId(reportId);
//     const property = allProperties.find(p => p.propertyId === propertyId);
// setNewTask(prev => ({ ...prev, reportId, propertyId: property?._id }));

//   console.log(property);


//     setShowPopUpId(prev => (prev === reportId ? null : reportId));
//     localStorage.setItem('reportId', reportId);
//   }

//      async function handleAssignTaskSubmit(e) {
//         e.preventDefault();
//         console.log(activeReportId);
//         console.log(newTask);
    
//         try {
//           setNewTask({
//           reportId: newTask.reportId,
//           propertyId: newTask.propertyId,
//           engineerId: newTask.engineerId,
//           assignedBy: CurrentUser?._id || "admin",
//         });
//         console.log(newTask)
//           const response = await api.post("api/tasks/assign", newTask);
//           console.log("Assigned Task:", response.data);
    
//           setNewTask(InitialNewTaskState);
//             setShowAssignTaskForm(false);
//             setShowPopUpId(null);
//             setActiveReportId(null);
//             toast.success(response.data.message || 'Task assigned successfully')
//         } catch (error) {
//           console.log("Assign Task Error:", error);
//           toast.error(error.response.data.message || 'Error assigning task');
//         }
//     finally{
//         await getReports();
//     }
    
//       }
    
//       async function handleDeleteReport() {
//         console.log(activeReportId);
//         try {
//           const response = await api.delete(`api/report/${activeReportId}`);
//           console.log("Deleted report:", response.data);
//           getReports();
//           toast.success(response.data.message || 'Report deleted Successfully')
//         } catch (error) {
//           console.log("Delete Report Error:", error);
//           toast.error(error?.response?.data?.message || 'Error deleting report')
//         }
//         setShowDeletePrompt(false);
//         setShowPopUpId(null);
//         setActiveReportId(null);
//       }

//         return(
//             <>
//             <div className="table-div">
//                 <h1>{onDashboard ? 'Latest Reports' : (
//         <>
//         <select name='filterText'
//         value={filterText}
//         onChange={(e)=> setFilterText(e.target.value)}
//         className="filter-select">
//           <option value="all_reports">All Reports</option>
//           <option value="assigned">Assigned</option>
//           <option value="unassigned">Unassigned</option>
//           <option value="resolved">Resolved</option>
//           <option value="unresolved">Unresolved</option>
//         </select>
        
//         </>
//       )
//       }
//         </h1>
//             <table>
//                   <thead>
//                         <tr>
//                             <th>Property ID</th>
//                             <th>Submission Date</th>
//                             <th>Description</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(reportsToDisplay) && reportsToDisplay.map(report=> (
//                             <tr key={report._id}>
//                                 <td>{report.propertyId}</td>
//                                 <td>{new Date(report.submittedAt.split('T')[0]).toLocaleDateString('en-us', {
//                                    year: "numeric",
//   month: "short",
//   day: "2-digit"
//                                 })}</td>
//                                 <td>
//                                     <span>
//                                         {report.description}
//                                     <button  onClick={() => {handleReportOptionsClick(report,report._id, report.propertyId); setActiveReportId(report._id)}} 
//                                     className='more-options'>
//                                         :
//                                     </button>
//                                     {showPopUpId === report._id && (
//                     <div className='pop-up-div'>
//                       <button onClick={() => {
//                         setShowAssignTaskForm(true);
//                         setShowPopUpId(null);
//                       }}>
//                         Assign task
//                       </button>
//                       <button
//                         className="delete"
//                         onClick={() => {
//                           setShowDeletePrompt(true);
//                           setShowPopUpId(null);
//                           setActiveReportId(report._id);
//                         }}>
//                         Delete report
//                       </button>
//                       <button onClick={() => {setShowMoreInfo(true); setShowPopUpId(null); setActiveReport(report)}}>
//                         More Info
//                       </button>
//                     </div>
//                   )}
//                                     </span>
//                                     </td>

//                             </tr>
//                         ))}
//                     </tbody>

//                 </table>

//                 {showAssignTaskForm && (
//         <div className='form-overlay'>
//           <div className="confirm-delete">

//           <button onClick={()=> setShowAssignTaskForm(false)}
//             className='close-pop-up-button'>X
//             </button>

//             <label>Assign to:</label>
//             <select
//               name="engineerId"
//               value={newTask.engineerId}
//               onChange={(e) =>
//                 setNewTask(prev => ({ ...prev, engineerId: e.target.value }))
//               }
//             >
//               <option value="">Select Engineer</option>
//               {Engineers.map(engineer => (
//                 <option key={engineer._id} value={engineer._id}>
//                   {engineer.fullName}
//                 </option>
//               ))}
//             </select>
//             <input type="submit" className='submit' value="Assign" onClick={handleAssignTaskSubmit} />
//         </div>
//         </div>

//       )}

//       {/* Delete Confirmation Prompt */}
//       {showDeletePrompt && (
//         <div className='form-overlay'>
//            <div className="confirm-delete">
//           <button
//           onClick={()=> setShowDeletePrompt(false)}
//           className='close-pop-up-button'>
//             X
//             </button>
//             <div>
//               <span>Are you sure you want to delete this report?</span>
//           <button
//             onClick={handleDeleteReport}
//             className="confirm-delete-button">
//             Confirm Delete
//           </button>
//             </div>
//         </div>
//         </div>

//       )}
//        {showMoreInfo &&(
//     <div className="form-overlay">
//       <div className="confirm-delete">
//         <button onClick={()=> setShowMoreInfo(false)}
//         className='close-pop-up-button'>
//           X
//         </button>
//               <p className="property-id">
//                   {activeReport.propertyId}
//                </p>
                        
//                             <p>
//                               <span className='property-keys'>Description:</span>
//                               {activeReport.description}
//                               </p>
//                               <p>
//                                 <span className="property-keys">Submitted At:</span>
//                                 {activeReport.submittedAt.split('T')[0]}
//                               </p>

//       </div>


//     </div>
//   )}
//   {onDashboard && allReports.length > 5 && (
  
//           <Link to='/portal/reports' className="view-more-link"> View more <FontAwesomeIcon icon={faArrowRight} /></Link>
//         )
//         } 
//         {!onDashboard && (
//           <>
//           {filteredReports.length} out of {allReports.length}
//           </>
//         )}
//             </div>
//             </>
//         )
// }

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import api from '../api/axios-instance'
import { 
  Search,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  MapPin,
  Eye,
  Edit,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react'

export default function Reports() {
  const [reports, setReports] = useState([])
  const [filteredReports, setFilteredReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [createdByFilter, setCreatedByFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [allTasks, setAllTasks] = useState([])
  const itemsPerPage = 15

  useEffect(() => {
    async function loadReports() {
      try {
        const data = await api.get('api/reports').then(res => res.data.reports)
        setReports(data)
        setFilteredReports(data)
      } catch (error) {
        console.error('Failed to load reports:', error)
      } finally {
        setLoading(false)
      }
    }
            async function getTasks(){
                    const res = await api.get("api/tasks");
                    setAllTasks(res.data);
    }

    loadReports()
    getTasks();
  }, [])

  useEffect(() => {
    let filtered = reports

    if (searchTerm) {
      filtered = filtered.filter(report =>
        report.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        report.propertyId.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (createdByFilter !== 'all') {
      filtered = filtered.filter(report => report.createdBy === createdByFilter)
    }

    setFilteredReports(filtered)
    setCurrentPage(1)
  }, [reports, searchTerm, statusFilter, createdByFilter])



  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredReports.length / itemsPerPage)

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">
            Manage citizen reports and track resolution progress
          </p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="text-sm">
            Total: {filteredReports.length}
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search reports..."
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
              <option value="submitted">Submitted</option>
              <option value="validated">Validated</option>
              <option value="assigned">Assigned</option>
              <option value="resolved">Resolved</option>
            </select>

            <select
              value={createdByFilter}
              onChange={(e) => setCreatedByFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Sources</option>
              <option value="citizen">Citizen Reports</option>
              <option value="staff">Staff Reports</option>
            </select>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Open: {filteredReports.filter(r => !['resolved'].includes(r.status)).length}</span>
              <span>Resolved: {filteredReports.filter(r => r.status === 'resolved').length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        {paginatedReports.map((report) => (
          <Card key={report._id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center ">
                    <div>
                      <p className="text-sm text-gray-500">
                        {report.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 mb-2">{report.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>location</span>
                  </div>
                  {report.media && (
                    <div className="flex items-center space-x-1">
                      <ImageIcon className="w-4 h-4" />
                      <span>{report.media} attachment(s)</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Update Status
                  </Button>
                </div>
                {report.propertyId && (
                  <Button size="sm" variant="ghost" className="text-green-600">
                    View Property
                  </Button>
                )}
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
    </div>
  )
}