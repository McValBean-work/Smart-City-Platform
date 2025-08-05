import Main from'../layout/main'
import { useState } from 'react'
import api from '../api/axios-instance'
import { toast } from 'react-toastify';


function ReportForm (){
const initialState = {
        propertyId:"",
        description: "",
        media: ""
    };

const [reportFormData , setReportFormData] = useState(initialState);
const [isSubmitting, setIsSubmitting]= useState(false);

const handleChange = (e)=>{
    const {name , value} = e.target;

      setReportFormData(prev =>({...prev, [name]: value}))

  }

const reportSubmit = async (e) => {
e.preventDefault();
console.log(reportFormData);
setIsSubmitting(true);


try {
const response = await api.post('api/report', reportFormData);
console.log(response.data);
toast.success(response.data.message || 'Report successfully submitted');
}
catch(error){
    toast.error(error?.response?.data?.message || 'Error submitting report');
}
finally{
setReportFormData(initialState);
setIsSubmitting(false);
}



}

    return(
        <div className="flex min-w-full min-h-full px-0 sm:px-16 md:px-32 my-8" id="FormDiv">
        <form onSubmit={reportSubmit} id="reportForm" className="flex flex-col w-full">
            <h1 className='font-semibold mb-2 text-2xl lg:text-3xl'> Report An Issue</h1>
            <p className='mb-4 lg:mb-6 text-gray-500'>Help us maintain your comminuty by reporting problems you encounter.</p>
            <label htmlFor="propertyId" className='mb-2 font-medium'>Property ID</label>
            <input type="text"
            id="propertyId"
            name="propertyId"
            value={reportFormData.propertyId}
            onChange={handleChange}
            placeholder="property id"
            className="w-full sm:w-4/5 md:1/2 border-gray-300 px-4 py-2 rounded border" required/>
            <label htmlFor="description" className='mt-4 mb-1 sm:mb-2 font-medium '>Description</label>
            <textarea name="description"
             id="description"
             value={reportFormData.description}
             onChange={handleChange}
             className="w-full sm:w-4/5 md:1/2-l/2vh border-gray-300 px-4 py-2 rounded border"
             placeholder="type description here" rows="8" />
            <label htmlFor="media" className='mt-4 mb-2 font-medium'> Picture/Video (Optional)</label>
            <input type="file"
            id="media"
            name="media"
            value={reportFormData.media}
            onChange={handleChange}
            className="w-full h-1/2 text-center border-gray-300 px-4 py-2 border" />
            <input type="submit"
            value={isSubmitting? 'submitting...' : 'submit'} className={ 'flex w-full sm:w-min mt-4 bg-[#1CAC78] text-white font-medium px-6 py-2 border rounded-4xl'}/>
        </form>
        </div>
    )
}

export default ReportForm