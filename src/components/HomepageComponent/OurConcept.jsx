import { FaCircle, FaRegCircle } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const OurConcept = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16">
      {/* Header */}
      <h2 className="text-center text-red-600 text-3xl md:text-4xl font-bold mb-10">
        Our Concept
      </h2>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center md:items-start">
        {/* Vertical Center Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"></div>

        {/* Steps */}
        <Step
          position="right"
          number="01"
          title="ETHICS"
          description="We are working constructively to influence proposed laws and regulations. Also follow corporate guidelines and rules of foreign principle."
          iconColor="text-red-500"
        />
        <Step
          position="left"
          number="02"
          title="QUALITY"
          description="Keep satisfy customer with superior quality & ensure our best product."
          iconColor="text-red-500"
        />
        <Step
          position="right"
          number="03"
          title="PRICE"
          description="Provide quality products with competitive price for achieve customers complete satisfaction."
          iconColor="text-purple-500"
        />
        <Step
          position="left"
          number="04"
          title="SPEED"
          description="Our employees work daily to find newer & better ways to deliver quality goods on time with increasable production capacity."
          iconColor="text-blue-500"
        />
        <Step
          position="right"
          number="05"
          title="DESIGN"
          description="Our efforts for innovation and excellence enable us to earn great acclamation in a highly competitive international market design."
          iconColor="text-yellow-500"
        />
        <Step
          position="left"
          number="06"
          title="COMMUNICATION"
          description="To ensure work in our level of seniority we always keep better communication with buyers, factories & suppliers."
          iconColor="text-green-500"
        />
        <Step
          position="right"
          number="07"
          title="CAPACITY"
          description="We respect any purchase order quantity for work in our level of seniority we always keep better commitment for delivery."
          iconColor="text-green-500"
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Step = ({ position, number, title, description, iconColor }) => {
  return (
    <div className={`relative flex w-full mb-8 ${position === "left" ? "justify-start" : "justify-end"}`}>
      {/* Step Content */}
      <div
        className={`flex items-center ${position === "left" ? "flex-row-reverse" : "flex-row"} w-full md:w-1/2`}
      >
        {/* Icon */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white border-4 border-gray-300 rounded-full`}>
          <FaCircle className={`text-xs ${iconColor}`} />
        </div>
        <h1 className="flex items-center gap-1">
        <FaRegCircle className={`text-xs ${iconColor}`} />
        <FaRegCircle className={`text-xs ${iconColor}`} />
        <FaRegCircle className={`text-xs ${iconColor}`} />
        <FaRegCircle className={`text-xs ${iconColor}`} />
        <FaRegCircle className={`text-xs ${iconColor}`} />
        </h1>
        <div className="relative">
        <p
          className={`text-8xl transform scale-y-[.7] ${
            position === "left"
              ? `${iconColor}`
              : `-scale-x-100 ${iconColor}`
          }`}
        >
          <FiMessageCircle />
        </p>
        <h1 className={`absolute top-[29px] text-2xl font-bold left-[29px] ${iconColor}`}>SSL</h1>
        </div>

        {/* Text Box */}
        <div
          className={`bg-white p-4 rounded-md ml-4 ${position === "left" ? "text-right" : "text-left"}`}
        >
          <h3 className={`font-bold text-sm md:text-lg ${iconColor}`}>
            {number}. {title}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm max-w-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurConcept;
