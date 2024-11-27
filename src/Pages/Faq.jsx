import { useState } from 'react';
import Nav from "../components/Navber/Nav";
import SecondNavImg from '../components/SecondNavImg';

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    { id: 1, question: 'What kind of business organization is SSL?', answer: 'Textile, Footwear, Handicraft, Home textile, Household, Gloves, Bag & Backpack, Toy etc' },
    { id: 2, question: 'Our detailed product list of SSL?', answer: 'Textile, Footwear, Handicraft, Home textile, Household, Gloves, Bag & Backpack, Toy etc.' },
    { id: 3, question: 'How can I contact SSL?', answer: ' info@stylorium.net/yousuf.sarker@stylorium.net Mobile: +88 01730595698.' },
    { id: 4, question: 'What type of client can approach SSL?', answer: 'Textile, Footwear, Handicraft, Home textile, Household, Gloves, Bag & Backpack, Toy etc' },
    { id: 5, question: 'What is the shipment lead time after the order placement?', answer: '30-120 days' },
    { id: 6, question: 'What is the payment term?', answer: 'LC, TT, DP, DDP, DAP. CASH.' },
    { id: 7, question: 'What the minimum order quantity (MOQ) per style/color?', answer: '500 pices per color' },
    { id: 8, question: 'Why would you consider SSL as your business partner?', answer: 'For comparative price with on time delivery.' },
    { id: 9, question: 'How do I apply for a job at SSL?', answer: 'by web side as well as Email.' },
    { id: 10, question: 'How and what do I negotiable?', answer: ' By email or Whats app as well as correct payment mode.' },
    { id: 11, question: 'What time will the products be dispatched?', answer: 'within the 60-120 days.' },
    { id: 12, question: 'Is there any advice that is relevant to all of your buyer?', answer: 'If you are doing business with us your thought will change.' },
  ];

  return (
   <div>
     <Nav isVisible={true} />
       {/* <div className="mt-[111px] container mx-auto"> */}
       <SecondNavImg text="Faq Page" img="https://i.ibb.co/4jK4Xx1/download.jpg"/>
     <section className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="text-center pb-6">
          <h2 className="text-3xl font-semibold relative inline-block pb-2">
            FAQ
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#4C578D]"></span>
          </h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200"
            >
              <button
                className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-[#4c578d38] focus:outline-none focus:ring focus:ring-[#4C578D]"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="flex items-center">
                  <span className="bg-[#4C578D] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-4">{faq.id}</span>
                  {faq.question}
                </span>
                <span className='text-lg'>{openItem === faq.id ? '-' : '+'}</span>
              </button>
              {openItem === faq.id && (
                <div className="px-6 py-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Faq;
