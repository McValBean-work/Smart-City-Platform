import LandingHeader from "./landing-header";
import Main from '../layout/main'
import Footer from '../layout/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag,faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import BackgroundImage from '../../assets/images/green-building.webp'

 export default function AboutPage() {
    return (
<>
<div className="flex min-w-full min-h-full relative">
    <LandingHeader />
    <div className="flex min-w-full min-h-full bg-fill bg-center bg-no-repeat absolute inset-0" style={{ backgroundImage: `url(${BackgroundImage})`}}></div>
    
        
<Main className="flex w-full h-full p-4 flex-1 text-white">
    <div className="flex flex-col w-full h-full bg-black/40 py-2 relative"></div>
<div className="flex flex-col w-full min-h-full justify-center px-0 md:px-48 rounded-xl ">
            <h2 className="flex items-center font-bold text-5xl w-full p-4 rounded-xl text-[#1CAC78] mb-4">About Omni City</h2>
                <div className="flex w-full h-full gap-4 rounded-xl p-4">
                    <div className="w-full min-h-full flex flex-col justify-center gap-4">
            <h3 className="font-medium text-4xl text-[#1CAC78] w-full">Our Mission</h3>
            <p className="flex mb-4 w-full text-2xl justify-between">
                Smart City Platform is dedicated to enhancing community living by providing a streamlined platform for reporting and resolving public property maintenance issues. Our mission is to empower citizens to actively participate in maintaining their neighborhoods, ensuring a safe and well-kept environment for everyone.
            </p>
                </div>
                </div>
            <h3 className="font-medium text-3xl mb-2 mt-4 px-4 text-[#1CAC78]">How It Works</h3>
            <p className="mb-4 px-4">
                <ul className="flex flex-col text-2xl min-h-1/3 my-4 justify-between list-none gap-8">
                    <li className="flex">
                        <FontAwesomeIcon icon={faFlag} className="p-4 rounded-xl bg-[#1CAC78]/10" />
                        <div className="mx-4">
                            <p className="font-medium">Report issue</p>
                            <span className="text-[#1CAC78]/70">Report an issue with a detailed description and optional media evidence</span>

                        </div>
                        
                    </li>
                    <li className="flex">
                        <FontAwesomeIcon icon={faSearchLocation} className="p-4 rounded-xl bg-[#1CAC78]/10" />
                        <div className="mx-4">
                            <p className="font-medium">Assessment</p>
                            <span className="text-[#1CAC78]/70">Our team then reviews the severity of the issue</span>
                        </div>
                    </li>
                    <li className="flex">
                        <FontAwesomeIcon icon={faCheckCircle} className="p-4 rounded-xl bg-[#1CAC78]/10" />
                        <div className="mx-4">
                            <p className="font-medium">Resolution</p>
                            <span className="text-[#1CAC78]/70">The issue will be assigned to engineers to be taken care of</span>
                        </div>
                        
                    </li>

                </ul>
            
            </p>
            <h3 className="font-medium text-3xl mb-2 mt-4 px-4 text-[#1CAC78]">Our Team</h3>
            <p className="mb-4 px-4 text-2xl">
                Smart City Platform is developed and maintained by a dedicated team of urban planners, software engineers, and community advocates. We are passionate about leveraging technology to improve civic engagement and create more livable cities. Our team collaborates closely with city officials and community groups to ensure the platform meets the needs of all stakeholders.
            </p>
            <h3 className="font-medium text-3xl mb-2 mt-4 px-4 text-[#1CAC78]">Contact Us</h3>
            <p className="mb-4 px-4 text-2xl">
                For questions, feedback, or support, please reach out to us at support@smartcityplatform.com. We value your input and are committed to continuously improving Smart City Platform to better serve our community.
            </p>
        </div>
</Main>
<Footer />
    </div>



</>
  )
}