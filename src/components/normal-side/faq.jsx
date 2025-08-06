import { useState } from "react";

function FaqSection(){
    const[showAnswer, setShowAnswer]= useState(null);

   const faqs = [
  {
    question: "What is OmniCity?",
    answer: "OmniCity is a smart city platform that helps citizens and administrators access urban services efficiently.",
  },
  {
    question: "How do I report an issue in the city?",
    answer: "You can report issues using the 'Report' feature on the dashboard or through the mobile app.",
  },
  {
    question: "Is my data secure on this platform?",
    answer: "Yes, we follow industry-standard security practices to protect your data and privacy.",
  },
  {
    question: "Can I access the platform on my phone?",
    answer: "Absolutely. The platform is fully responsive and also available as a mobile app.",
  },
  {
    question: "How often is the platform updated?",
    answer: "We roll out updates monthly, with regular maintenance and new feature releases.",
  },
];



    return(
    <>
        <div className="flex flex-col min-h-full min-w-full mt-auto p-0 sm:px-8 md:px-32">
            <h1 className="my-12 font-semibold text-2xl mb-8 lg:text-3xl lg:mb-12 white">Frequently Asked Questions</h1>
            {faqs.map(faq => 
            <>
            <div >
            <div key={faq.question} onClick={()=> setShowAnswer(prev =>!prev)} className="flex flex-col min-w-full sm:text-2xl border border-gray-300 rounded whitespace-normal mb-4" >
              <div className="flex w-full justify-between px-4 py-4">
                <span>{faq.question}</span> 
              <span className="font-bold">
            { showAnswer? (
                <>
                -
                </>
            ):(
            <>
            +
            </>)}
            </span>
              </div>
              
            {showAnswer && (
                    <>
                    <span className="flex min-w-full mb-4 py-2 text-gray-600">{faq.answer}</span>
                    </>
                )

                }
                </div>
            </div>
                
                            
            </>   
            )
            }
            <p className=" my-4 text-xl text-gray-500">If you have anymore questions please contact us directly</p>
        </div>
    </>
    )
}

export default FaqSection;