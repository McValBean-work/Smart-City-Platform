import LandingHeader from "./landing-header";
import Main from "../layout/main";
import Footer from "../layout/footer";
import FaqSection from "./faq";


function FaqPage(){
    return(
        <>
        <LandingHeader />
        <Main className='p-4 flex-1 flex'>
            <FaqSection />
        </Main>
        <Footer />
        </>
    )
}

export default FaqPage;