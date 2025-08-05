import LandingHeader from "./landing-header";
import Main from '../layout/main'
import Footer from '../layout/footer'

 export default function AboutPage() {
    return (
<div className='gap-4'>
<LandingHeader />
<Main className="p-4 my-4 md:mt-12 md:px-12">
<div className="flex flex-col min-w-full min-h-full">

            <h2 className="font-semibold text-3xl my-4 ">About Smart City Platform </h2>
            <h3 className="font-medium text-2xl mb-2">Our Mission</h3>
            <p className="mb-4">
                Smart City Platform is dedicated to enhancing community living by providing a streamlined platform for reporting and resolving public property maintenance issues. Our mission is to empower citizens to actively participate in maintaining their neighborhoods, ensuring a safe and well-kept environment for everyone.
            </p>
            <h3 className="font-medium text-2xl mb-2">How It Works</h3>
            <p className="mb-4">
            Smart City Platform simplifies the process of reporting issues such as potholes, graffiti, or damaged street signs. Users can easily submit reports with detailed descriptions and photos, track the progress of their reports, and receive updates on resolutions. Our platform connects citizens with the relevant city departments, fostering transparency and accountability in public property maintenance.
            </p>
            <h3 className="font-medium text-2xl mb-2">Our Team</h3>
            <p className="mb-4">
                Smart City Platform is developed and maintained by a dedicated team of urban planners, software engineers, and community advocates. We are passionate about leveraging technology to improve civic engagement and create more livable cities. Our team collaborates closely with city officials and community groups to ensure the platform meets the needs of all stakeholders.
            </p>
            <h3 className="font-medium text-2xl mb-2">Contact Us</h3>
            <p className="mb-4">
                For questions, feedback, or support, please reach out to us at support@smartcityplatform.com. We value your input and are committed to continuously improving Smart City Platform to better serve our community.
            </p>
        </div>
</Main>
<Footer />
</div>
  )
}