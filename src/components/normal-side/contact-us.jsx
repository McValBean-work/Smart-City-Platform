
function ContactUsForm(){
    return(
        <>
        <form action="" className='flex flex-col'>
            <h1 className='font-bold text-3xl'>Reach Out To Us</h1>
            <p className="mb-4">We're here to help. Please fill out the form below  or reach out to us directly</p>
            <label htmlFor="FirstName" className="mb-2">Full Name</label>
            <input type="text" 
                   placeholder='Enter Your First Name' 
                   className="w-full sm:w-1/2 mb-4 px-4 py-2 bg-[#1CAC78]/10"
                   required/>
            <label htmlFor="EmailAddress" className="mb-2">Email Address</label>
            <input type="text" 
                   placeholder='Enter Email Address' 
                   className="w-full sm:w-1/2 mb-4 px-4 py-2 bg-[#1CAC78]/10"
                   required/>
            <label htmlFor="PhoneNumber" className="mb-2">Phone Number</label>
            <input type="text" 
            placeholder='Enter Your Phone Number' 
            className="w-full sm:w-1/2 mb-4 px-4 py-2 bg-[#1CAC78]/10"
            required/>
            <label htmlFor="Message" className="mb-2">Message</label>
            <textarea 
            placeholder="Enter message" 
            className="w-full sm:w-1/2 mb-4 px-4 py-2 bg-[#1CAC78]/10" rows='5'
            required/>
            <input type="submit" className='w-full sm:w-1/3 border-[#1CAC78] border px-4 py-2 rounded' />
        </form>

        <div className="my-8">
            <h1 className="font-bold text-2xl mb-4">Contact Information</h1>
            <p>Phone: +233 208995735 </p>
            <p>Email: afrilogicsolutions.com</p>
        </div>
        </>
    )
}
export default ContactUsForm;