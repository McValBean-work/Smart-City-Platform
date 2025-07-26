import ContactUsForm from "./contact-us"
import LandingHeader from "./landing-header"
import Main from "../layout/main"
import Footer from "../layout/footer"

function ContactUsPage(){
    return (
        <>
        <LandingHeader />
        <Main className='p-4'>
         <ContactUsForm />
        </Main>
        <Footer />
        </>
    )
}
export default ContactUsPage;