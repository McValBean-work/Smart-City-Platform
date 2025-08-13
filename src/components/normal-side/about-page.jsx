import LandingHeader from "./landing-header";
import Main from '../layout/main'
import Footer from '../layout/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag,faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import AboutImage from '../../assets/images/people-on-grass.jpg'
import MissionImage from '../../assets/images/green-buildings.webp'

 export default function AboutPage() {
    return (
<>
<LandingHeader />
<Main className="p-4 flex-1">
<div className="flex flex-col min-w-full min-h-full justify-center px-0 my-8">
            <h2 className="flex items-center font-bold text-white  text-4xl my-4 bg-no-repeat  w-full bg-center min-h-100 p-4 rounded-xl" style={{ backgroundImage: `url(${AboutImage})`,  backgroundSize: "cover", }}>About Omni City</h2>
                <div className="flex w-full h-full mt-16 gap-4 sm:bg-black/60 rounded-xl px-8 py-24 relative">
                    <img src={MissionImage} alt="" className="flex min-w-full min-h-full rounded-xl sm:w-1/2" />
                    <div className="w-full min-h-full flex flex-col justify-center gap-4 bg-black/60 sm:bg-black/1 sm:w-1/2 sm:static absolute ml-auto">
            <h3 className="font-bold text-4xl text-white w-full">Our Mission</h3>
            <p className="flex mb-4 text-white lg:text-2xl w-full justify-between">
                Smart City Platform is dedicated to enhancing community living by providing a streamlined platform for reporting and resolving public property maintenance issues. Our mission is to empower citizens to actively participate in maintaining their neighborhoods, ensuring a safe and well-kept environment for everyone.
            </p>

                    </div>
                    

                </div>
            
            <h3 className="font-medium text-2xl mb-2 mt-4 px-4">How It Works</h3>
            <p className="mb-4 px-4">
                <ul className="flex flex-col min-h-1/3 my-4 justify-between list-none gap-8">
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
            <h3 className="font-medium text-2xl mb-2 mt-4 px-4">Our Team</h3>
            <p className="mb-4 px-4">
                Smart City Platform is developed and maintained by a dedicated team of urban planners, software engineers, and community advocates. We are passionate about leveraging technology to improve civic engagement and create more livable cities. Our team collaborates closely with city officials and community groups to ensure the platform meets the needs of all stakeholders.
            </p>
            <h3 className="font-medium text-2xl mb-2 mt-4 px-4">Contact Us</h3>
            <p className="mb-4 px-4">
                For questions, feedback, or support, please reach out to us at support@smartcityplatform.com. We value your input and are committed to continuously improving Smart City Platform to better serve our community.
            </p>
        </div>
</Main>
<Footer />
</>
  )
}