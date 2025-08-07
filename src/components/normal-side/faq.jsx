import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FaqSection(){

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
        <div className="flex flex-col justify-center min-h-full min-w-full mt-auto p-0 sm:px-8 md:px-32">
          <div className='w-full sm:w-4/5 md:w-3/4 lg:w-1/2 my-auto'>
            <h1 className="my-12 font-semibold text-2xl mb-8 lg:text-3xl lg:mb-12 white">Frequently Asked Questions</h1>
            <Accordion type="single" className='w-full' collapsible>
            {faqs.map(faq => 
            <>
            
    <AccordionItem value={faq.question}>
    <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
    <AccordionContent>
      <p className="text-xl text-gray-500">{faq.answer}</p>
    </AccordionContent>
    </AccordionItem>                     
            </>   
            )
            }
            </Accordion>

          </div>
            
        </div>
    </>
    )
}

export default FaqSection;