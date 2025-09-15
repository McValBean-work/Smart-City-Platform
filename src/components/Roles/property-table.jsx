// import api from "../api/axios-instance";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// export default function PropertyTable(){
//   const location = useLocation();
//   const onDashboard = location.pathname === "/portal/dashboard"; // or whatever your dashboard path is         
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties ,setFilteredProperties] = useState([]);
//   const [loadingToast, setLoadingToast] = useState(false);
//   const propertiesToDisplay = onDashboard ? properties.slice(-5) : filteredProperties;

//   const [showPopUpId, setShowPopUpId] = useState(null);
//   const [currentProperty, setCurrentProperty] = useState();
//   const [showMoreInfoPopUp, setShowMoreInfoPopUp] = useState(false);
//   const [showDeletePrompt , setShowDeletePrompt]= useState(false);
//   const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
//   const [updatedState, setUpdatedState]= useState({ state:null });
//   const [filterText, setFilterText] = useState('');
  

//   async function getProperties(){
//     setLoadingToast(true);
//     try{
// const res = await api.get( "api/properties");
//     setProperties(res.data);
//     setFilteredProperties(res.data);
//     console.log(res.data);
//     }
//     catch(error){
//       toast.error(error?.response?.data?.message || 'Error fetching properties')
//     }
//     finally{
//       setLoadingToast(false);
//     }
    
//   }
//   useEffect(()=>{
//     getProperties();
//     console.log("use effect get properties called");
//   },[]);

//  useEffect(() => {
//   if (filterText && ['streetlight', 'bench', 'garbage-bin'].includes(filterText)) {
//     setFilteredProperties(properties.filter(property => property.type === filterText));
//   } else if(filterText && filterText == 'state') {
//     setFilteredProperties(properties.filter(property => property.state === filterText));

//   }
  
//   else {
//     setFilteredProperties(properties);
//   }
// }, [filterText, properties]);

//   function HandleMoreInfoOnClick(property){
//     setShowMoreInfoPopUp(true);
//     setCurrentProperty(property);
//   }

//   async function UpdateStateSubmit(e){
//     e.preventDefault()
//     console.log(currentProperty) 
//     try{
//       const res = await api.patch(`api/properties/${currentProperty._id}`,updatedState);
//       console.log(res.data);
//       toast.success(res.data.message || 'Property state updated')

//       setUpdatedState({
//         state:null
//       });
//       await getProperties();
//       setShowDeletePrompt(false);
//   setShowUpdatePopUp(false);

//     }
//     catch(error){
//       console.log(error);
//       toast.error(error.response?.data?.message || 'Error updating property state')
//     }

//   }
//   async function DeletePropertySubmit(e){
//     e.preventDefault()
//     console.log(currentProperty)

//     try{
//       const res = await api.delete(`api/properties/${currentProperty._id}`);
//       console.log(res.data);
//       toast.success(res.data.message || 'Property deleted')

//       await getProperties();
//       setShowDeletePrompt(false);
//       setShowUpdatePopUp(false);
//       setCurrentProperty(null);

//     }
//     catch(error){
//       console.log(error);
//       toast.error(error?.response?.data?.message || 'Error deleting property')
//     }
//     finally{
//       setCurrentProperty(null);
//     }

//   }

//   return(
//     <div className="table-div">
//     <h1>{onDashboard ? 'Latest Properties' 
//     : (
//         <>
//         <select name='filterText'
//         value={filterText}
//         onChange={(e)=> setFilterText(e.target.value)}
//         className="filter-select">
//           <option value="all_properties">All Properties</option>
//           <option value="streetlight">Streetlights</option>
//           <option value="garbage-bin">Garbage Bins</option>
//           <option value="bench">Benches</option>
//         </select>      
//         </>)}
//      </h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Property ID</th>
//           <th>Type</th>
//           <th>Address</th>
//           <th>State</th>
//         </tr>

//       </thead>
//       <tbody>
//         {loadingToast && (
//           <span className='loading-span'>Loading....</span>
//         ) }
//         {Array.isArray(propertiesToDisplay) && propertiesToDisplay.map(property =>(
//           <tr key={property._id}>
//             <td>{property.propertyId}</td>
//             <td>{property.type.replace('-',' ')}</td>
//             <td>{property.location.address}</td>
//             <td>
//               <span>{property.state}
//                 <button onClick={() => {setShowPopUpId(prev => (prev === property._id ? null : property._id)); setCurrentProperty(property)}}
//                 className='more-options'>:</button>
//                 {showPopUpId === property._id && (
//                                     <div className='pop-up-div'>
                                    
//                                       <button onClick={() => {setShowUpdatePopUp(true);
//                                         setShowPopUpId(null);
//                                       setCurrentProperty(property)}
//                                       }>
//                                         Update State
//                                       </button>
//                                       <button
//                                         className="delete"
//                                         onClick={() => {
//                                          setShowDeletePrompt(true);
//                                          setShowPopUpId(null)
//                                          setCurrentProperty(property)
//                                         }}>
//                                         Delete
//                                       </button>
//                                       <button onClick={()=>
//                                         {HandleMoreInfoOnClick(property);
//                                          setShowPopUpId(null);
//                                          setCurrentProperty(property)}}>
//                                         More Info
//                                       </button>
//                                     </div>
//                                   )}
//                 </span></td>
//           </tr>

//         ))

//         }

//       </tbody>
//     </table>
//     {
//   showDeletePrompt && (
//     <>
//     <div className='form-overlay'>
//       <div className='confirm-delete'>
//         <button className="close-pop-up-button" onClick={() => setShowDeletePrompt(false)}>
//         X
//       </button>
//       <div>
//         <span>Are you sure you want to delete this property?</span>
//       <button onClick={DeletePropertySubmit} className="confirm-delete-button">
//          Confirm delete
//       </button>

//       </div>

      
//       </div>

//     </div>
//     </>
//   )
// }
// {
//   showUpdatePopUp &&(
//     <>
//     <div className='form-overlay'>
//       <div className='confirm-delete'>
//         <button className="close-pop-up-button" onClick={() => setShowUpdatePopUp(false)}>
//         X
//       </button>
//       <select name="updatedState"
//       value={updatedState.state}
//       onChange ={ (e) =>(
//       setUpdatedState(prev =>({...prev, state: e.target.value})))}>

//     <option value="">Select State</option>
//     <option value="working">Working</option>
//     <option value="damaged">Damaged</option>
//     <option value="pending">Pending</option>
//     <option value="under_repair">Under repair</option>
//     <option value="fixed">Fixed</option>
//     </select>
//     <button onClick={UpdateStateSubmit} className='submit'>
//       Update State
//     </button>


//       </div>
//     </div>
//     </>
//   )
// }
// {showMoreInfoPopUp && (
//   <div className="form-overlay">
//   <div className='confirm-delete'>
//     <button className ='close-button' onClick={()=> setShowMoreInfoPopUp(false)}>X</button>

//       <p className="property-id">
//       <span>{currentProperty.propertyId}</span>
//        </p>
//                     <p>
//                       <span className='property-keys'>Type:</span>
//                     {currentProperty.type}
//                     </p>
//                     <p>
//                       <span className='property-keys'>State:</span>
//                       {currentProperty.state}
//                       </p>
//                     <p><span className='property-keys'>Address:</span>
//                         {currentProperty.location.address}
//                         </p>
//                     <p><Link to ={`https://www.google.com/maps?q=${currentProperty.location.coordinates.lat},${currentProperty.location.coordinates.lng}`} target='_blank' >Get directions to property</Link></p>
//     </div>
//   </div>
// )
// }

//  {onDashboard && properties.length > 5 && (

//         <Link to='/portal/properties' className="view-more-link"> View more <FontAwesomeIcon icon={faArrowRight} /></Link>
//       )
//       } 
//       {!onDashboard && (
//           <>
//           {filteredProperties.length} out of {properties.length}
//           </>
//         )}
      
      
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'
import NewGeolocationPropertyForm from './supervisor/create-property-geolocation-form'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import api from '../api/axios-instance'
import { 
  Search,
  Building2,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faClock } from '@fortawesome/free-regular-svg-icons'

export function Properties() {
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [stateFilter, setStateFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showGeolocationForm, setShowGeolocationForm] = useState(false);
  const itemsPerPage = 20

  useEffect(() => {
    async function loadProperties() {
      try {
        const res = await api.get("api/properties");
        setProperties(res.data);
        setFilteredProperties(res.data);
      } catch (error) {
        console.error('Failed to load properties:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

   useEffect(() => {

    if (searchTerm) {
      setFilteredProperties(properties.filter(property =>
        property.propertyId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.address.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    }

    if (typeFilter && stateFilter) {
      if (typeFilter === 'all' && stateFilter === 'all') {
        setFilteredProperties(properties);
      }
      else if (typeFilter === 'all'  && stateFilter !== 'all' ) {
        const filteredByState = properties.filter(property => property.state === stateFilter);
        setFilteredProperties(filteredByState);     
      }
      else if (typeFilter !== 'all'  && stateFilter === 'all' ) {
        const filteredByType = properties.filter(property => property.type === typeFilter);
        setFilteredProperties(filteredByType);
      }
      else {
      setFilteredProperties(properties.filter(property => property.type === typeFilter && property.state === stateFilter));

      }
      
    }

  }, [properties, searchTerm, typeFilter, stateFilter]);


  const getStateIcon = (state) => {
    switch (state) {
      case 'working':
        return <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-green-600" />
      case 'damaged':
        return <FontAwesomeIcon icon={faTriangleExclamation} className="w-4 h-4 text-red-600" />
      case 'in_progress':
        return <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-yellow-600" />
      default:
        return <FontAwesomeIcon icon={faMapPin} className="w-4 h-4 text-gray-600" />
    }
  }

  const getPropertyType = (type) => {
    switch (type) {
      case 'streetlight':
        return faMapPin // Replace with appropriate icon
      case 'garbage-bin':
        return faMapPin // Replace with appropriate icon
      case 'bench':
        return faMapPin // Replace with appropriate icon
      default:
        return faMapPin // Default icon
    }
  }

  const getStateBadgeVariant = (state) => {
    switch (state) {
      case 'working':
        return 'success'
      case 'damaged':
        return 'error'
      case 'pending':
        return 'warning'
      default:
        return 'outline'
    }
  }

  const getPriorityBadgeVariant = (priority) => {
    switch (priority) {
      case 'high':
        return 'error'
      case 'medium':
        return 'warning'
      case 'low':
        return 'outline'
      default:
        return 'outline'
    }
  }

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6 min-h-screen">
          <div className="h-8 bg-gray-200 rounded w-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col p-6 space-y-6 min-h-screen w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600">
            Manage city infrastructure and monitor property status
          </p>
        </div>
        <Button className="flex items-center space-x-2" onClick={() => setShowGeolocationForm(true)}>
          <Plus className="w-4 h-4" />
          <span>Add Property</span>
        </Button>
        {showGeolocationForm && (
          <NewGeolocationPropertyForm 
          onClose={() => setShowGeolocationForm(false)}
          />
        )}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Types</option>
              <option value="streetlight">Streetlight</option>
              <option value="garbage-bin">Garbage Bin</option>
              <option value="bench">Bench</option>
            </select>

            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="working">Working</option>
              <option value="damaged">Damaged</option>
              <option value="in_progress">In Progress</option>
            </select>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Total: {filteredProperties.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={getPropertyType(property.type)} className="w-5 h-5 text-gray-600" />
                  <CardTitle className="text-lg">{property.name}</CardTitle>
                </div>
                {getStateIcon(property.state)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={getStateBadgeVariant(property.state)}>
                  {property.state.replace('_', ' ')}
                </Badge>
                <Badge variant={getPriorityBadgeVariant(property.state)}>
                  {property.state}
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium">{property.type.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">{property.location.address}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="font-medium">{property.lastUpdatedAt}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
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
    </div>
  )
}