// import Nav from "../components/Navber/Nav";

// const CompanyGoals = () => {
//     return (
//         <div>
//              <Nav isVisible={true} />
//            <div className="mt-28 container mx-auto">
//            <img className="w-full" src="https://powerslides.com/wp-content/uploads/2019/11/Company-Objectives-1.jpg" alt="" />
//            </div>
//         </div>
//     );
// };

// export default CompanyGoals;

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Nav from "../components/Navber/Nav";

const CompanyGoals = () => {
  return (
   <div>
     <Nav isVisible={true} />
     <div className="min-h-screen pt-10 flex flex-col items-center mt-28">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4C578D] mb-2">
          COMPANY OBJECTIVES
        </h1>
      </div>

      {/* Objectives Section */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 max-w-4xl w-full">
        <div className="flex items-center justify-center mb-6">
          <FaQuoteLeft className="text-2xl text-gray-400" />
          <p className="mx-4 text-center text-gray-700">
            Company objectives are measurable and effectively describe the
            actions required to accomplish a task. Objectives define the
            techniques your organization will use to achieve sales success,
            customer service standards, and branding opportunities as well as
            any other measurable aspirations.
          </p>
          <FaQuoteRight className="text-2xl text-gray-400" />
        </div>
      </div>

      {/* Success Section */}
      <div className="relative my-12">
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 bg-[#4C578D] rounded-full flex items-center justify-center">
            <AiOutlineArrowRight className="text-white text-2xl" />
          </div>
        </div>
        <h2 className="text-center text-4xl md:text-5xl text-[#4C578D] font-bold mt-6">
          SUCCESS
        </h2>
      </div>

      {/* Key Points Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">
        {/* Teamwork */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Team Work</h3>
          <p className="text-gray-600">
            Teamwork is the key to the success of any project. Team members
            complement and support each other, which positively affects the
            result of the work.
          </p>
        </div>
        {/* Success */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-600 mb-2">Success</h3>
          <p className="text-gray-600">
            Achieving success depends on teamwork and a carefully crafted
            project plan.
          </p>
        </div>
        {/* Creative */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-red-600 mb-2">Creative</h3>
          <p className="text-gray-600">
            A creative approach to working on a project allows you to create
            unique products that are not similar to those on the market. This
            gives an additional competitive advantage.
          </p>
        </div>
        {/* Express Goals Positively */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-purple-600 mb-2">
            Express Goals Positively
          </h3>
          <p className="text-gray-600">
            Rapid response to changing situations allows resources to be
            redirected and the project completed within a predetermined time
            frame.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CompanyGoals;