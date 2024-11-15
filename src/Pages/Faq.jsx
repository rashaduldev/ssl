// import { useState } from "react";
// import Nav from "../components/Navber/Nav";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// const Faq = () => {
//   const faqData = [
//     { question: "Why shouldn't we trust atoms?", answer: "They make up everything" },
//     { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
//     { question: "What's the object-oriented way to become wealthy?", answer: "Inheritance." },
//     { question: "How many tickles does it take to tickle an octopus?", answer: "Ten-tickles!" },
//     { question: "What is: 1 + 1?", answer: "Depends on who you are asking." },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <Nav isVisible={true} />
//       <div className="mt-[111px] container mx-auto">
//         <div
//           className="h-40 relative"
//           style={{
//             backgroundImage: `url("https://i.ibb.co/4jK4Xx1/download.jpg")`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="container mx-auto">
//             <h1 className="absolute top-[40%] text-4xl text-white uppercase mx-20">Faq page</h1>
//           </div>
//         </div>
//         <div className="faq-container px-4 py-8">
//           <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`faq border p-4 mb-4 rounded-lg ${
//                 activeIndex === index ? "bg-gray-100" : "bg-white"
//               }`}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="font-semibold text-lg">{faq.question}</h3>
//                 <button onClick={() => toggleFAQ(index)}>
//                   {activeIndex === index ? (
//                     <MdKeyboardArrowUp size={24} />
//                   ) : (
//                     <MdKeyboardArrowDown size={24} />
//                   )}
//                 </button>
//               </div>
//               {activeIndex === index && (
//                 <p className="faq-text mt-2 text-gray-600">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;

import { useState } from 'react';
import Nav from "../components/Navber/Nav";

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
         <div
           className="h-40 relative mt-[111px]"
           style={{
             backgroundImage: `url("https://i.ibb.co/4jK4Xx1/download.jpg")`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
         >
           <div className="container mx-auto">
             <h1 className="absolute top-[40%] text-4xl text-white uppercase mx-20">Faq page</h1>
           </div>
           </div>
     <section className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="text-center pb-6">
          <h2 className="text-3xl font-semibold relative inline-block pb-2">
            FAQ
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-pink-500"></span>
          </h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200"
            >
              <button
                className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-pink-50 focus:outline-none focus:ring focus:ring-pink-300"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="flex items-center">
                  <span className="bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-4">{faq.id}</span>
                  {faq.question}
                </span>
                <span>{openItem === faq.id ? '-' : '+'}</span>
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
