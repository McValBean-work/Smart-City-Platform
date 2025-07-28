
function ContactUsForm(){
    return(
        <>
        <form action="" className='flex font-sans flex-col'>
            <h1 className='font-space font-semibold text-2xl lg:text-4xl '>Reach Out To Us</h1>
            <p className="mb-8 lg:mb-12 mt-3">We're here to help. Please fill out the form below  or reach out to us directly</p>
            <label htmlFor="FirstName" className="mb-2 lg:text-2xl font-semibold border-gray-300">Full Name</label>
            <input type="text" 
                   placeholder='Enter Your First Name' 
                   className="w-full sm:w-1/2 mb-4 px-4 py-2 border-gray-300 border"
                   required/>
            <label htmlFor="EmailAddress" className="mb-2 font-semibold lg:text-2xl">Email Address</label>
            <input type="text" 
                   placeholder='Enter Email Address' 
                   className="w-full sm:w-1/2 mb-4 px-4 py-2 border-gray-300 border"
                   required/>
            <label htmlFor="PhoneNumber" className="mb-2 lg:text-2xl font-semibold">Phone Number</label>
            <input type="text" 
            placeholder='Enter Your Phone Number' 
            className="w-full sm:w-1/2 mb-4 px-4 py-2 border-gray-300 border"
            required/>
            <label htmlFor="Message" className="mb-2 lg:text-2xl font-semibold">Message</label>
            <textarea 
            placeholder="Enter message" 
            className="w-full sm:w-1/2 mb-4 px-4 py-2 border-gray-300 border" rows='5'
            required/>
            <input type="submit" className='flex ml-auto w-full text-2xl sm:w-1/10 bg-[#1CAC78] text-white border px-4 py-2 rounded-2xl' />
        </form>

        <div className="my-12">
            <h1 className="font-semibold text-2xl lg:text-4xl mb-4">Contact Information</h1>
            <p className="lg:text-2xl"><span className="font-semibold font-sans">Phone:</span> +233 208995735 </p>
            <p className="lg:text-2xl"><span className="font-semibold font-sans">Email:</span> afrilogicsolutions.com</p>
        </div>
        </>
    )
}
export default ContactUsForm;