import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import TestimonialSlider from "./AboutUsTeammember";

const AboutUs = () => {
  return (
    <div>
      {/* Fixed Navigation Bar */}
      <Nav isVisible={true} />

      {/* Main content with padding to avoid overlapping with the fixed Nav */}
      <div className="">
        {/* Header */}
        <SecondNavImg text="About Us" img="https://i.ibb.co/4jK4Xx1/download.jpg"/>

        {/* Image and About Section */}
        <div className="md:flex space-x-8 container mx-auto mt-10">
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/fCBJzsY/aboutus.png" // Replace with your image URL
              alt=" About Our Company"
              className="rounded-md w-full h-[80%]"
            />
          </div>
          <div className="mt-4 md:mt-10 flex-1">
            <h3 className="text-4xl font-semibold mt-5"> About Our Company</h3>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim, 
              accumsan pulvinar sit ac, eu nunc. Ut accumsan quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
       {/* Team Members Section */}
        <div className="container mx-auto">
          <h4 className="text-4xl font-bold text-center mt-24 text-gray-600 mb-16 uppercase">Team Members</h4>
        <div className="my-20">
        <TestimonialSlider/>
      </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
