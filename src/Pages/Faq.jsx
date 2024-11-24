import { useState } from 'react';
import Nav from "../components/Navber/Nav";
import SecondNavImg from '../components/SecondNavImg';

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    { id: 1, question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: 2, question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { id: 3, question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { id: 4, question: 'Where can I get some?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
    { id: 5, question: 'What is Lorem Ipsum?', answer: 'It has survived not only five centuries, but also the leap into electronic typesetting.' },
    { id: 6, question: 'Where does it come from?', answer: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.' },
    { id: 7, question: 'Why do we use it?', answer: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.' },
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
