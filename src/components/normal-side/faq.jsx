import { useState } from "react";

function FaqSection(){
    const[showAnswer, setShowAnswer]= useState(false);

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
            <h1 className="my-12 font-semibold text-2xl mb-4 lg:text-3xl lg:mb-4 white">Frequently Asked Questions</h1>
            {faqs.map(faq => 
            <>
            <div>
            <button key={faq.question} onClick={()=> setShowAnswer(true)} className= {showAnswer? "flex min-w-full sm:text-2xl mb-2 px-4 py-4 border border-gray-300 rounded justify-between whitespace-normal" : "flex min-w-full text-xl px-4 py-4 border border-gray-300 rounded justify-between whitespace-normal mb-4"}><span>{faq.question}</span> <span className="flex ml-auto font-bold">
            { showAnswer? (
                <>
                -
                </>
            ):(
            <>
            +
            </>)}</span>
                </button>
            </div>
                { showAnswer && (
                    <>
                    <div className="flex min-w-full mb-4 px-4 py-2">{faq.answer}</div>
                    </>
                )

                }
                            
            </>   
            )
            }
            <p className=" my-4 text-xl text-gray-500">If you have anymore questions please contact us directly</p>
        </div>
    </>
    )
}

export default FaqSection;