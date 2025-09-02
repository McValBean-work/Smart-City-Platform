// import  { useEffect, useState, useRef } from "react";
// import api from '../api/axios-instance'
// import { GoogleMap,useJsApiLoader, MarkerF, InfoWindowF, Circle} from "@react-google-maps/api";
// import streetLightIcon from '../../assets/icons/streetlight.svg'
// import bench from '../../assets/icons/bench.svg'
// import garbageBin from '../../assets/icons/garbage-basket.svg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
// import { toast } from "react-toastify";
// import { Link } from 'react-router-dom';
// import NewGeolocationPropertyForm from '../Roles/supervisor/create-property-geolocation-form'
// import getRole from "../Authentication-page/auth";








// function StreetLightMap(){

// const [showForm, setShowForm]= useState(false);
// const [properties , setProperties] = useState([]);
// const [searchTerm, setSearchTerm] = useState("");
// const [typeFilter, setTypeFilter] = useState("all");
// const [stateFilter, setStateFilter] = useState("all");
// const [selectedProperty, setSelectedProperty] = useState(null);
// const [mapZoom, setMapZoom] = useState(13);
// const mapRef = useRef();
// const [selectedMarker , setSelectedMarker] = useState();
// const [showDeletePrompt, setShowDeletePrompt] = useState(false);
// const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
// const [currentPropertyId, setCurrentPropertyId] = useState(null);
// const [updatedState, setUpdatedState] = useState({
//   state:null
// })
// const role = getRole();





//   async function getProperties(){
//   const res = await api.get( "api/properties");
//   setProperties(res.data);
//   console.log(res.data);
// }

// useEffect(()=>{
//   getProperties();
//   console.log("use effect get properties called");
// },[]);

// const InitialNewPropertyState ={
//     propertyId: "" ,
//     address: "",
//     lat: "" ,
//     lng: "" ,
//     propertyType : "",
//     state: ""
//     };
// const [NewProperty , setNewProperty] = useState(InitialNewPropertyState
//   );

// const [ShowNewPropertyForm , setShowNewPropertyForm] = useState(false);

// function HandleMarkerClick(children){
//   setSelectedMarker(children);
// }

// function getRadiusForZoom(zoom) {
//   const baseZoom = 15;
//   const baseRadius = 200; // radius in meters
//   return baseRadius * Math.pow(2, baseZoom - zoom);
// }


// async function HandleUpdateStateOnClick(propertyId){
//   setCurrentPropertyId(propertyId);
//   console.log(propertyId)
//   const res = await api.get(`api/properties/${propertyId}`);
//   console.log(res.data)
//   setShowUpdatePrompt(true);

// }
// async function HandleDeleteButtonOnClick(propertyId){
//   setCurrentPropertyId(propertyId);
//   console.log(propertyId)
//   const res = await api.get(`api/properties/${propertyId}`);
//   console.log(res.data)
//   setShowDeletePrompt(true);

// }

// async function UpdateStateSubmit(e){
//   e.preventDefault()
//   console.log(currentPropertyId)

//   try{
//     const res = await api.patch(`api/properties/${currentPropertyId}`,updatedState);
//     console.log(res.data);
//     toast.success(res.data.message || 'Property state updated')

//     setUpdatedState({
//       state:null
//     });
//     await getProperties();
//     setShowDeletePrompt(false);
// setShowUpdatePrompt(false);
// setCurrentPropertyId(null);


//   }
//   catch(error){
//     console.log(error);
//     toast.error(error.response?.data?.message || 'Error updating property state')
//   }

// }
// async function DeletePropertySubmit(e){
//   e.preventDefault()
//   console.log(currentPropertyId)

//   try{
//     const res = await api.delete(`api/properties/${currentPropertyId}`);
//     console.log(res.data);
//     toast.success(res.data.message || 'Property deleted')

//     await getProperties();
//     setShowDeletePrompt(false);
//     setShowUpdatePrompt(false);
//     setCurrentPropertyId(null);



//   }
//   catch(error){
//     console.log(error);
//     toast.error(error?.response?.data?.message || 'Error deleting property')
//   }

// }


// function MapOnclick(e) {
// const lat= e.latLng.lat();
// const lng = e.latLng.lng();

// setNewProperty(prev => ({ ...prev, lat, lng }));
// setShowNewPropertyForm(true);





// console.log("NewProperty (click):", { lat, lng });



// };

// async function NewPropertySubmit(e) {
//   e.preventDefault();
//   const formattedProperty =
//   {
//     propertyId: '',
//     type: NewProperty.propertyType,
//     address : NewProperty.address ,
//       lat: NewProperty.lat ,
//       lng : NewProperty.lng ,
//     state : NewProperty.state};

//   try {
//     const response = await api.post("api/properties", formattedProperty)
//     console.log(response.data);
//     console.log('properties refreshed')
//     toast.success(response.data.message || 'Created new property')
//     await getProperties();

// }
// catch(error){
//   console.log("Error creating property" ,error);
//   toast.error(error?.response?.data.message || 'Error creating property')
// }

// finally{
//   setShowNewPropertyForm(false);
//   setNewProperty(InitialNewPropertyState);
//   console.log(NewProperty);
// }

  
// };

//   const center = {
//     lat: 5.6358,
//     lng: -0.1614,
//   };
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // <-- this is for your api key in your env file that we cannot type out directly
//   });

//   return isLoaded ? (
//     <>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//     <div>
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
//         <div className="p-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Properties Map</h2>
          
//           {/* Search */}
//           <div className="relative mb-4">
//             <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <Input
//               placeholder="Search properties..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10"
//             />
//           </div>

//           {/* Filters */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Property Type
//               </label>
//               <select
//                 value={typeFilter}
//                 onChange={(e) => setTypeFilter(e.target.value | 'all')}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option value="all">All Types</option>
//                 <option value="streetlight">Streetlight</option>
//                 <option value="traffic_light">Traffic Light</option>
//                 <option value="waste_bin">Waste Bin</option>
//                 <option value="water_pipe">Water Pipe</option>
//                 <option value="public_toilet">Public Toilet</option>
//                 <option value="others">Others</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Status
//               </label>
//               <select
//                 value={stateFilter}
//                 onChange={(e) => setStateFilter(e.target.value | 'all')}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option value="all">All Statuses</option>
//                 <option value="working">Working</option>
//                 <option value="faulty">Faulty</option>
//                 <option value="in_progress">In Progress</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Properties List */}
//         <div className="flex-1 overflow-auto p-4">
//           <div className="space-y-2">
//             {filteredProperties.map((property) => (
//               <Card
//                 key={property.id}
//                 className={`cursor-pointer transition-colors ${
//                   selectedProperty?.id === property.id 
//                     ? 'ring-2 ring-green-500 bg-green-50' 
//                     : 'hover:bg-gray-50'
//                 }`}
//                 onClick={() => setSelectedProperty(property)}
//               >
//                 <CardContent className="p-3">
//                   <div className="flex items-start justify-between mb-2">
//                     <h3 className="font-medium text-sm text-gray-900 leading-tight">
//                       {property.name}
//                     </h3>
//                     {getStateIcon(property.state)}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-gray-500">
//                       {property.locality}
//                     </span>
//                     <Badge variant={getStateBadgeVariant(property.state)} className="text-xs">
//                       {property.state.replace('_', ' ')}
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="md:col-span-2 text-center bg-white rounded-lg shadow">
//       <p>Click on map to add new property or <button onClick={()=> setShowForm(true)}
//       style={{color:'blue'}}> use your location </button></p>

//     <GoogleMap
//       mapContainerClassName="flex-1 flex h-[600px] md:h-[700px] lg:h-[800px] rounded-lg w-full"
//       center={center}
//       zoom={mapZoom}
//       onZoomChanged={() => {
//     const newZoom = mapRef.current?.getZoom();
//     if (newZoom !== undefined) setMapZoom(newZoom);
//   }}
//       onClick={ ['admin', 'supervisor'].includes(role) && MapOnclick}
//       options={
//         {
//         draggable: true,
//         zoomControl: true,
//         fullscreenControl: false,
//         streetViewControl: false,
//         mapTypeControl: false,
//         restriction: {
//           latLngBounds: {
//             north: 11.1784,
//             south: 4.7371,
//             west: -3.2625,
//             east: 1.1996,
//           },
//           strictBounds: false,
//         },
//       }}
//     >
//         {
//               Array.isArray(properties) &&
//               properties.map((property) => (
//                 <>
//                 <Circle
//               center={{
//                 lat:property.location.coordinates.lat, 
//                 lng:property.location.coordinates.lng
//               }}
//               radius={getRadiusForZoom(mapZoom)}
//               options={{
//                 fillColor: property.state === 'working' ? 'green' : 'red',
//                 fillOpacity:0.6,
//                 zIndex:0
//               }} />
//               <MarkerF
//               key={property._id}
//               icon={property.type === 'garbage-bin' ? {url: garbageBin, scaledSize: new google.maps.Size(40,40)}
//               :property.type === 'bench' ? {url: bench, scaledSize: new google.maps.Size(60,40)}
//               : {url: streetLightIcon, scaledSize: new google.maps.Size(40,40)}
//               }
//               position={{lat:property.location.coordinates.lat,
//                 lng:property.location.coordinates.lng}
//               }
//               onClick={() => {HandleMarkerClick(property._id);
// }}
// zIndex={1}
//               >
//               </MarkerF>
              
//                {
//                 selectedMarker === property._id &&(
//                 <InfoWindowF
//                 onCloseClick={() => setSelectedMarker(null)}
//                 position={{lat:property.location.coordinates.lat,
//                 lng:property.location.coordinates.lng}
//               } >

//                     <>
//                     <p className="property-id">{property.propertyId}</p>
//                     <p><span className='show-more-title'>Type:</span>
//                     {property.type}
//                     </p>
//                     <p>
//                       <span className='show-more-title'>State:</span>
//                       {property.state}
//                       </p>
//                     <p><span className='show-more-title'>Address:</span>
//                         {property.location.address}
//                         </p>
//                     <p>
//                       <button onClick={()=>{HandleUpdateStateOnClick(property._id)}}
//                         className='update-btn'>
//                           Update
//                         </button>
//                         {['admin','supervisor'].includes(role) && <button onClick={()=> {HandleDeleteButtonOnClick(property._id)}}
//                           className="delete-btn">
//                         Delete
//                         </button>}
//                     </p>
//                       <p><Link to ={`https://www.google.com/maps?q=${property.location.coordinates.lat},${property.location.coordinates.lng}`} target='_blank' >Get directions to property</Link></p>
//                         </>

//                 </InfoWindowF>

//                 )

//               }
//               </>

//             )
//             )
//           }
//           {
//   showDeletePrompt && (
//     <>
//     <div className='form-overlay'>
//       <div className='confirm-delete'>
//         <button onClick={() => setShowDeletePrompt(false)}
//           className="close-pop-up-button">
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
//   showUpdatePrompt &&(
//     <>
//     <div className='form-overlay'>
//       <div className='confirm-delete'>
//         <button onClick={() => setShowUpdatePrompt(false)}
//           className='close-pop-up-button'>
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
//       {ShowNewPropertyForm && (<MarkerF position={NewProperty} />)}
//     </GoogleMap>
//     {ShowNewPropertyForm && (
//       <>
//       <div className='form-overlay'>
//       <div className="new-property-form-div">
//       <div>
//         <button onClick={() => {
//           setNewProperty(InitialNewPropertyState);
//           setShowNewPropertyForm(false);}} className="close-button">
//           <FontAwesomeIcon icon={faCircleXmark} className='close-button-icon' />
//         </button>

//         <h1 className='create-property-header'>Create New Property</h1>
//       <form onSubmit={NewPropertySubmit} className="new-property-form">
//         <label htmlFor="address">Address</label>
//         <input type="text" placeholder="Enter address" value={NewProperty.address}
//         onChange={(e) =>
//          setNewProperty(prev => ({...prev ,address: e.target.value}))}  />
//         <label htmlFor="lat">Lat:</label>
//         <input type="text" value={NewProperty.lat} readOnly required/>
//         <label htmlFor="lng">Lng:</label>
//         <input type="text" value= {NewProperty.lng} readOnly required/>
//         <label htmlFor="property-type">Property type</label>
//         <select name="property-type" value={NewProperty.propertyType}
//         onChange={(e) =>
//          setNewProperty(prev => ({...prev ,propertyType: e.target.value}))}   required>
//           <option value="">select type</option>
//           <option value="streetlight">Streetlight </option>
//           <option value="bench">Bench</option>
//           <option value="garbage-bin">Garbage bin</option>
//         </select>
//         <label htmlFor="state">State</label>
//         <select name="state" value={NewProperty.state} onChange={(e) =>
//           setNewProperty( prev => ({...prev , state: e.target.value}))
//         } >
//           <option value="">select state</option>
//           <option value="working">Working</option>
//           <option value="damaged">Damaged</option>
//         </select>
//         <input type="submit" value="Create New Property" className="new-property-submit" />

//   </form>

//       </div>
//     </div>
//     </div>

//     </>
//     )}
//     {showForm && (
//       <>
//       <NewGeolocationPropertyForm onClose={() => setShowForm(false)} />
//       </>
//     )}
//     </div>
//     </div>
//     </>
    
    
//   )
//   : (
//     <p>Loading Map...</p>

//   );

// }

// export default StreetLightMap;


import { useEffect, useState, useRef } from "react";
import api from "../api/axios-instance";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
  Circle,
} from "@react-google-maps/api";
import streetLightIcon from "../../assets/icons/streetlight.svg";
import bench from "../../assets/icons/bench.svg";
import garbageBin from "../../assets/icons/garbage-bin.svg";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { faCircleCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 5.560014,
  lng: -0.205744,
};

const StreetLightMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("all");

  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onUnmount = () => {
    mapRef.current = null;
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("api/properties");
        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

   useEffect(() => {
    if (filterText && ['streetlight', 'bench', 'garbage-bin'].includes(filterText)) {
      setFilteredProperties(properties.filter(property => property.type === filterText));
    } else if(filterText && filterText == 'state') {
      setFilteredProperties(properties.filter(property => property.state === filterText));
  
    }
    
    else {
      setFilteredProperties(properties);
    }
  }, [filterText, properties]);


  const getIcon = (type) => {
    switch (type) {
      case "streetlight":
        return streetLightIcon;
      case "bench":
        return bench;
      case "garbage-bin":
        return garbageBin;
      default:
        return streetLightIcon;
    }
  };

  const getMarkerColor = (state) => {
    switch (state) {
      case 'working':
        return '#22C55E';
      case 'damaged':
        return '#EF4444';
      case 'in_progress':
        return '#FACC15';
      default:
        return '#6B7280';
    }
  };


  const getStateIcon = (state) => {
    switch (state) {
      case 'working':
        return <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-600" />;
      case 'damaged':
        return <FontAwesomeIcon icon={faTriangleExclamation} className="w-4 h-4 text-red-600" />;
      case 'in_progress':
        return <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-yellow-600" />;
      default:
        return <FontAwesomeIcon icon={faMapPin} className="w-4 h-4 text-gray-600" />;
    }
  };

  return isLoaded ? (
    <div className="flex md:flex-col cols-4 gap-4 p-4 h-full w-full">
      <div className="col-span-1 space-y-4 min-h-full w-max">
        <Input
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterText}
          onChange={(e) => setFilterText(e.target.value || "all")}
          className="w-full p-2 border rounded"
        >
          <option value="all">All Types</option>
          <option value="streetlight">Streetlight</option>
          <option value="bench">Bench</option>
          <option value="garbage-bin">Garbage Bin</option>
        </select>

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value || "all")}
          className="w-full p-2 border rounded"
        >
          <option value="all">All States</option>
          <option value="working">Working</option>
          <option value="faulty">Faulty</option>
        </select>

        <div className="space-y-2 max-h-screen overflow-y-auto md:min-w-full">
          {filteredProperties.map((property) => (
            <Card
              key={property._id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => setSelectedProperty(property)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{property.propertyId}</h4>
                  {getStateIcon(property.state)}
                </div>
                <p className="text-sm text-gray-600">
                  {property.location?.address}
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge
                  
                    className="text-xs"
                    style={{ color: getMarkerColor(property.state),backgroundColor: getMarkerColor(property.state)+'20' }}
                  >
                    {property.state}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex col-span-3 min-h-full min-w-full ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          mapContainerClassName="min-h-full w-full"
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {properties.map((property) => (
            <>

            <Circle
            center={{
                lat: property.location.coordinates.lat,
                lng: property.location.coordinates.lng,
              }}
            radius={1000}
            options={{
              strokeColor: getMarkerColor(property.state),
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: getMarkerColor(property.state),
              fillOpacity: 0.1,
            }}
          />
            <MarkerF
              key={property._id}
              position={{
                lat: property.location.coordinates.lat,
                lng: property.location.coordinates.lng,
              }}
              icon={{
                url: getIcon(property.type),
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => setSelectedProperty(property)}
            />
            </>
          ))}

          {selectedProperty && (
            <InfoWindowF
              position={{
                lat: selectedProperty.location.coordinates.lat,
                lng: selectedProperty.location.coordinates.lng,
              }}
              onCloseClick={() => setSelectedProperty(null)}
            >
              <div>
                <h3 className="font-bold">{selectedProperty.propertyId}</h3>
                <p>{selectedProperty.location?.address}</p>
                <p>Type: {selectedProperty.type}</p>
                <p>State: {selectedProperty.state}</p>
              </div>
            </InfoWindowF>
          )}

          
        </GoogleMap>
      </div>

      
    </div>
  ) : (
    <p>Loading map...</p>
  );
};

export default StreetLightMap;
