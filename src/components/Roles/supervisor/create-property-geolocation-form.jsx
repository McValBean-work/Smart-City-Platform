import { toast } from "react-toastify";
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import api from '../../api/axios-instance'

function NewGeolocationPropertyForm({ onClose }){

    const InitialNewPropertyState ={
    propertyId: "" ,
    address: "",
    lat: "" ,
    lng: "" ,
    propertyType : "",
    state: ""
    };

    const[newProperty, setNewProperty] = useState(InitialNewPropertyState);
    const [showGeolocationForm, setShowGeolocationForm] = useState(false);


    useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setNewProperty((prev) => ({
          ...prev,
          lat: latitude,
          lng: longitude
        }));
        setShowGeolocationForm(true); // <-- only show form after coords
      },
      (error) => {
        toast.error(error.message || "Unable to fetch location." );
      }
    );
  } else {
    toast.error("Geolocation is not supported by this device");
  }
}, []);


async function NewPropertySubmit(e) {
  e.preventDefault();
  const formattedProperty =
  {
    propertyId: '',
    type: newProperty.propertyType,
    address : newProperty.address ,
      lat: newProperty.lat ,
      lng : newProperty.lng ,
    state : newProperty.state};

  try {
    const response = await api.post("api/properties", formattedProperty)
    console.log(response.data);
    console.log('properties refreshed')
    toast.success(response.data.message || 'Created new property');

}
catch(error){
  console.log("Error creating property" ,error);
  toast.error(error?.response?.data.message || 'Error creating property')
}
finally{
    console.log(newProperty);
    setNewProperty(InitialNewPropertyState);
    setShowGeolocationForm(false);
}

 
};

    return(
        <>
            {showGeolocationForm && (
                  <>
                  <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
                  <div className="flex flex-col bg-white px-4 py-2  rounded-lg shadow-lg w-9/10 sm:w-100 relative ">
                  <div>
                    <div className="flex items-center min-w-full justify-between mt-2">
                      <h1 className='text-semibold text-2xl'>Create New Property</h1>
                      <button onClick={() => {
                      setNewProperty(InitialNewPropertyState);
                      setShowGeolocationForm(false); onClose();}} className="flex items-center justify-end">
                      <FontAwesomeIcon icon={faCircleXmark} className='w-10 h-10' />
                    </button>
                    

                    </div>
                    
                    <form onSubmit={NewPropertySubmit} className="flex flex-col space-y-2 mt-4">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Enter address" value={newProperty.address}
                    onChange={(e) =>
                     setNewProperty(prev => ({...prev ,address: e.target.value}))}
                     className="px-2 py-1 border rounded border-gray-300"  />
                    <label htmlFor="lat">Lat:</label>
                    <input type="text" value={newProperty.lat}
                    className="px-2 py-1 border rounded border-gray-300"
                    readOnly required/>
                    <label htmlFor="lng">Lng:</label>
                    <input type="text" value= {newProperty.lng}
                    className="px-2 py-1 border rounded border-gray-300"
                    readOnly required/>
                    <label htmlFor="property-type">Property type</label>
                    <select name="property-type" value={newProperty.propertyType}
                    onChange={(e) =>
                     setNewProperty(prev => ({...prev ,propertyType: e.target.value}))}
                     className="px-2 py-1 border rounded border-gray-300"   required>
                      <option value="">select type</option>
                      <option value="streetlight">Streetlight </option>
                      <option value="bench">Bench</option>
                      <option value="garbage-bin">Garbage bin</option>
                    </select>
                    <label htmlFor="state">State</label>
                    <select name="state" value={newProperty.state} onChange={(e) =>
                      setNewProperty( prev => ({...prev , state: e.target.value}))
                    } 
                    className="mb-8 px-2 py-1 border rounded border-gray-300"
                    required>
                      <option value="">select state</option>
                      <option value="working">Working</option>
                      <option value="damaged">Damaged</option>
                      <option value="pending">Pending</option>
                      <option value="under_repair">Under repair</option>
                      <option value="fixed">Fixed</option>
                    </select>
                    <input type="submit" value="Create New Property" className="bg-primary px-2 py-1 w-full mt-4 mb-4 rounded" />
            
              </form>
            
                  </div>
                </div>
                </div>
            
                </>
                )}
        </>
    )
}







export default NewGeolocationPropertyForm;