
function ContactUsForm(){
    return(
        <>
        <div className="flex flex-col min-w-full min-h-full px-0 sm:px-16 md:px-32 my-auto">
            <form className='flex font-sans flex-col min-w-full min-h-full'>
            <h1 className='font-semibold text-2xl lg:text-4xl '>Customer Feedback</h1>
            <p className="mb-8 lg:mb-12 mt-1 text-gray-500">We're here to help. Please fill out the form below  or reach out to us directly</p>
            <label htmlFor="FirstName" className="mb-2  font-medium border-gray-300">Full Name</label>
            <input type="text" 
                   placeholder='Enter Your First Name' 
                   className="w-full mb-4 px-4 py-2 border-gray-300 border"
                   required/>
            <label htmlFor="EmailAddress" className="mb-2 font-medium">Email Address</label>
            <input type="text" 
                   placeholder='Enter Email Address' 
                   className="w-full  mb-4 px-4 py-2 border-gray-300 border"
                   required/>
            <label htmlFor="PhoneNumber" className="mb-2 font-medium">Phone Number</label>
            <input type="text" 
            placeholder='Enter Your Phone Number' 
            className="w-full mb-4 px-4 py-2 border-gray-300 border"
            required/>
            <label htmlFor="Message" className="mb-2 font-medium">Message</label>
            <textarea 
            placeholder="Enter message" 
            className="w-full mb-4 px-4 py-2 border-gray-300 border" rows='5'
            required/>
            <input type="submit" className='flex w-full sm:w-min bg-[#1CAC78] text-white border px-6 py-2 rounded-2xl' />
        </form>

        <div className="my-12">
            <h1 className="font-semibold text-2xl lg:text-3xl mb-4">Contact Information</h1>
            <p><span className="font-medium ">Phone:</span> +233 208995735 </p>
            <p><span className="font-medium ">Email:</span> www.Afrilogicsolutions.com</p>
        </div>

        </div>
        

        
        </>
    )
}
export default ContactUsForm;