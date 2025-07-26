import ReportForm from "./report-form";
import LandingHeader from "./landing-header";
import Footer from "../layout/footer";
import Main from "../layout/main";

function ReportPage(){


    return(
        <>
        <LandingHeader />
        <Main  className='p-4'>
             <ReportForm />
        </Main>
        <Footer />
        </>
    )

}

export default ReportPage;