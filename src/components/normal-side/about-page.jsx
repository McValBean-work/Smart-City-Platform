// import LandingHeader from "./landing-header";
// import Main from "../layout/main";
// import Footer from "../layout/footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFlag, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
// import AboutImage from "../../assets/images/all-green.jpg";

// export default function AboutPage() {
//   return (
//     <>
//       <div className="flex flex-col min-w-full min-h-full">
//         <LandingHeader />
//         <Main className="flex flex-col w-full h-full py-4 flex-1 bg-gray-50">
//           {/* Hero Section */}
//           <div className="relative w-full h-[400px] flex items-center mb-12 pl-4 overflow-hidden">
//             <img
//               src={AboutImage}
//               alt="About OmniCity"
//               className="absolute inset-0 object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//             <h2 className="relative text-5xl font-extrabold text-white z-10">
//               About OmniCity
//             </h2>
//           </div>

//           {/* Mission */}
//           <section className="px-6 py-8 bg-white rounded-xl shadow-md mb-8">
//             <h3 className="font-semibold text-4xl text-gray-800 mb-4">
//               Our Mission
//             </h3>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               OmniCity is dedicated to enhancing community living by providing a
//               streamlined platform for reporting and resolving public property
//               maintenance issues. Our mission is to empower citizens to actively
//               participate in maintaining their neighborhoods, ensuring a safe
//               and well-kept environment for everyone.
//             </p>
//           </section>

//           {/* How it Works */}
//           <section className="px-6 py-8 bg-[#f0fdf4] rounded-xl mb-8">
//             <h3 className="font-semibold text-3xl text-[#1CAC78] mb-6">
//               How It Works
//             </h3>
//             <ul className="flex flex-col gap-6">
//               <li className="flex items-start">
//                 <FontAwesomeIcon
//                   icon={faFlag}
//                   className="p-4 rounded-xl bg-[#1CAC78]/10 text-[#1CAC78] text-2xl"
//                 />
//                 <div className="ml-4">
//                   <p className="font-medium text-xl">Report issue</p>
//                   <p className="text-gray-600">
//                     Report an issue with a detailed description and optional
//                     media evidence.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <FontAwesomeIcon
//                   icon={faSearchLocation}
//                   className="p-4 rounded-xl bg-[#1CAC78]/10 text-[#1CAC78] text-2xl"
//                 />
//                 <div className="ml-4">
//                   <p className="font-medium text-xl">Assessment</p>
//                   <p className="text-gray-600">
//                     Our team reviews the severity of the issue.
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <FontAwesomeIcon
//                   icon={faCheckCircle}
//                   className="p-4 rounded-xl bg-[#1CAC78]/10 text-[#1CAC78] text-2xl"
//                 />
//                 <div className="ml-4">
//                   <p className="font-medium text-xl">Resolution</p>
//                   <p className="text-gray-600">
//                     The issue will be assigned to engineers to be taken care of.
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>

//           {/* Team */}
//           <section className="px-6 py-8 bg-white rounded-xl shadow-md mb-8">
//             <h3 className="font-semibold text-3xl text-gray-800 mb-4">
//               Our Team
//             </h3>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               OmniCity is developed and maintained by a dedicated team of urban
//               planners, software engineers, and community advocates. We are
//               passionate about leveraging technology to improve civic engagement
//               and create more livable cities. Our team collaborates closely with
//               city officials and community groups to ensure the platform meets
//               the needs of all stakeholders.
//             </p>
//           </section>

//           {/* Contact */}
//           <section className="px-6 py-8 bg-[#f9fafb] rounded-xl mb-8">
//             <h3 className="font-semibold text-3xl text-[#1CAC78] mb-4">
//               Contact Us
//             </h3>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               For questions, feedback, or support, please reach out to us at{" "}
//               <a
//                 href="mailto:support@smartcityplatform.com"
//                 className="text-[#1CAC78] font-medium hover:underline"
//               >
//                 support@smartcityplatform.com
//               </a>
//               . We value your input and are committed to continuously improving
//               OmniCity to better serve our community.
//             </p>
//           </section>
//         </Main>
//         <Footer />
//       </div>
//     </>
//   );
// }


import LandingHeader from "./landing-header";
import Main from "../layout/main";
import Footer from "../layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../../assets/images/all-green.jpg";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col min-w-full min-h-full">
        <LandingHeader />
        <Main className="flex flex-col w-full h-full py-6 gap-8 flex-1 style={{ background: url('@/assets/images/green-buildings.webp') }}>">
          {/* Hero Section */}
          <div className="relative w-full h-[420px] flex items-center mb-16 overflow-hidden">
            <img
              src={AboutImage}
              alt="About OmniCity"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
            <h2 className="relative px-16 text-5xl md:text-6xl font-extrabold text-white tracking-tight z-10 drop-shadow-lg">
              About OmniCity
            </h2>
          </div>

          {/* Mission */}
          <section className="px-6 md:px-12 py-10 bg-white rounded-2xl shadow-lg mb-16 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8">
            <div className="w-full h-full mt-8 md:mt-0">
                <img src={AboutImage} alt="About OmniCity" className="w-full h-auto mt-8 rounded-lg shadow-md" />
            </div>

            <div className="w-full h-full flex flex-col justify-center md:pr-8">
                <h3 className="font-bold text-4xl text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              OmniCity is dedicated to enhancing community living by providing a
              streamlined platform for reporting and resolving public property
              maintenance issues. Our mission is to empower citizens to actively
              participate in maintaining their neighborhoods, ensuring a safe
              and well-kept environment for everyone.
            </p>

            </div>
            
            
          </section>

          {/* How it Works */}
          <section className="px-6 md:px-12 py-10 bg-[#f0fdf4] rounded-2xl border border-[#1CAC78]/20 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-full flex flex-col justify-center">
                <h3 className="font-bold text-3xl md:text-4xl text-[#1CAC78] mb-8">
              How It Works
            </h3>
            <ul className="flex flex-col gap-8">
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faFlag}
                  className="p-4 rounded-2xl bg-[#1CAC78]/10 text-[#1CAC78] text-3xl"
                />
                <div className="ml-5">
                  <p className="font-semibold text-xl mb-1">Report Issue</p>
                  <p className="text-gray-600">
                    Report an issue with a detailed description and optional
                    media evidence.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faSearchLocation}
                  className="p-4 rounded-2xl bg-[#1CAC78]/10 text-[#1CAC78] text-3xl"
                />
                <div className="ml-5">
                  <p className="font-semibold text-xl mb-1">Assessment</p>
                  <p className="text-gray-600">
                    Our team reviews the severity of the issue.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="p-4 rounded-2xl bg-[#1CAC78]/10 text-[#1CAC78] text-3xl"
                />
                <div className="ml-5">
                  <p className="font-semibold text-xl mb-1">Resolution</p>
                  <p className="text-gray-600">
                    The issue will be assigned to engineers to be taken care of.
                  </p>
                </div>
              </li>
            </ul>

            </div>
            <div className="w-full h-full flex items-center justify-center">
                <img src={AboutImage} alt="" className="w-full h-auto mt-8 rounded-lg shadow-md" />
            </div>
            
          </section>

          {/* Team */}
          <section className="px-6 md:px-12 py-10 bg-white rounded-2xl shadow-lg mb-12">
            <h3 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Our Team
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              OmniCity is developed and maintained by a dedicated team of urban
              planners, software engineers, and community advocates. We are
              passionate about leveraging technology to improve civic engagement
              and create more livable cities. Our team collaborates closely with
              city officials and community groups to ensure the platform meets
              the needs of all stakeholders.
            </p>
          </section>

          {/* Contact */}
          <section className="px-6 md:px-12 py-10 bg-[#f9fafb] rounded-2xl border border-gray-200 mb-12">
            <h3 className="font-bold text-3xl md:text-4xl text-[#1CAC78] mb-6">
              Contact Us
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              For questions, feedback, or support, please reach out to us at{" "}
              <a
                href="/contact-us"
                className="text-[#1CAC78] font-medium hover:underline"
              >
                here
              </a>
              . We value your input and are committed to continuously improving
              OmniCity to better serve our community.
            </p>
          </section>
        </Main>
        <Footer />
      </div>
    </>
  );
}
