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
        <div className="flex min-w-full min-h-full " id="FormDiv">
        <form onSubmit={reportSubmit} id="reportForm" className="flex flex-col w-full">
            <h1 className='font-semibold text-2xl mb-4'>Report An Issue</h1>
            <label htmlFor="propertyId" className='mb-2'>Property ID</label>
            <input type="text"
            id="propertyId"
            name="propertyId"
            value={reportFormData.propertyId}
            onChange={handleChange}
            placeholder="property id"
            className="w-full sm:w-1/2 bg-[#1CAC78]/10 px-4 py-2 rounded focus:outline-[#1CAC78]/50" required/>
            <label htmlFor="description" className='mt-4 mb-2'>Description</label>
            <textarea name="description"
             id="description"
             value={reportFormData.description}
             onChange={handleChange}
             className="w-full sm:w-1/2 h-l/2vh bg-[#1CAC78]/10 px-4 py-2 rounded focus:outline-[#1CAC78]/50"
             placeholder="type description here" rows="8" />
            <label htmlFor="media" className='mt-4 mb-2'> Picture/Video (Optional)</label>
            <input type="file"
            id="media"
            name="media"
            value={reportFormData.media}
            onChange={handleChange}
            className="w-full h-1/2 text-center bg-[#1CAC78]/10 px-4 py-2  focus:outline-[#1CAC78]" />
            <input type="submit"
            value={isSubmitting? 'submitting...' : 'submit'} className={isSubmitting? 'w-full sm:w-1/3 mt-4 bg-[#1CAC78] text-white font-semibold px-4 py-2 border rounded-4xl': ' w-full sm:w-1/3 mt-4 text-[#1CAC78]  font-semibold px-4 py-2 border-[#1CAC78] border rounded hover:bg-[#1CAC78] hover:text-white ease-in'}/>
        </form>
        </div>
    )
}

export default ReportForm