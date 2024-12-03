import Nav from "../components/Navber/Nav";

const ServicesPage = () => {
  return (
   <div>
     <Nav isVisible={true} />
       <div className="font-sans text-gray-700 mt-28">
      {/* Hero Section */}
    <div className="relative bg-gray-100">
  {/* Main Section */}
  <div
    className="relative bg-cover bg-center h-[600px]"
    style={{ backgroundImage: "url('https://i.ibb.co.com/6gB7tsx/Servises.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="mt-2 text-lg">Reliable Apparel Best Manufacturing Solution</p>
    </div>
  </div>

  {/* Wave Effect */}
<div className="absolute w-full -bottom-0">
<div className="relative w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,49.98C150,150,350,-50,600,49.98s450,100,600,0V120H0Z"
        className="fill-white"
      />
    </svg>
  </div>
</div>
    </div>

      {/* The Way We Work Section */}
      <section className="py-16 container mx-auto">
      {/* Section Title */}
      <h2 className="text-[#4E5896] text-3xl font-bold uppercase">
        The Way We Work
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-2xl font-medium mb-4">
            we design for{" "}
            <span className="text-green-600 font-bold">sustainability</span> and
            produce for a{" "}
            <span className="text-green-600 font-bold">greener</span> future.
          </p>
          <p className="mb-4">
            We are dedicated to crafting sustainable fashion, where every
            garment reflects our commitment to a greener future. By blending
            innovative design with eco-friendly practices, we ensure that our
            creations not only look good but also do good for the environment.
            At the heart of our mission is the belief that fashion should leave
            a positive impact on the planet, and we&apos;re working tirelessly to
            make that a reality.
          </p>
          <div className="flex items-start mb-6">
            <div className="mr-2 text-[#4E5896]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM5.293 7.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L7 9.586 5.293 7.293z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Our Mission:</h3>
              <p>
                Our mission is to deliver high-quality, stylish, and sustainable
                garments that meet the diverse needs of our global customers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
          <div className="relative">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              poster="https://via.placeholder.com/600x400"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-10 w-10 text-red-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093a.5.5 0 0 0-.79.407v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Our Values Section */}
      <div className="p-8 container mx-auto">
      {/* Heading */}
     

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
        <div className=" mb-8">
        <h2 className="text-[#4E5896] text-5xl py-9 font-bold uppercase">Our Services</h2>
        <h1 className="text-3xl font-bold mt-2">
          We’ve been create building for over 10 years
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl">
          At BRANDTEX International, we recognize the critical importance of time
          and information within the value chain. That’s why we proudly refer to
          ourselves as value managers. Our mission is to enhance efficiency and
          deliver value to your operations, consistently and under any
          circumstances.
        </p>
      </div>
          {/* Value Point 1 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              To Our Clients Who Let Us Keep On Moving
            </h3>
            <ul className="text-gray-600 mt-2 space-y-2 list-disc pl-5">
              <li>We ensure the right price, right quality, and on-time delivery.</li>
              <li>We believe in building long-term valued business partnerships.</li>
            </ul>
          </div>

          {/* Value Point 2 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">To Those Who Work With Us</h3>
            <ul className="text-gray-600 mt-2 space-y-2 list-disc pl-5">
              <li>We recruit and retain the right people in the right position.</li>
              <li>
                They must be educated, experienced, capable, and ethical.
              </li>
              <li>We treat them with dignity and fairness.</li>
            </ul>
          </div>

          {/* Value Point 3 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">To Our Shareholders</h3>
            <ul className="text-gray-600 mt-2 space-y-2 list-disc pl-5">
              <li>Business must make sound profit with reasonable growth in every year.</li>
            </ul>
          </div>

          {/* Value Point 4 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">To Our Supplier</h3>
            <ul className="text-gray-600 mt-2 space-y-2 list-disc pl-5">
              <li>To build partnership through mutual trust and respect.</li>
              <li>We work together in delivering common goals.</li>
            </ul>
          </div>

          {/* Value Point 5 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              To The Community And The Country We Are Doing Business
            </h3>
            <ul className="text-gray-600 mt-2 space-y-2 list-disc pl-5">
              <li>We contribute to the community by creating new jobs.</li>
              <li>We generate more foreign currencies through more exports.</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 ">
          <img
            src="https://i.ibb.co.com/6gB7tsx/Servises.jpg"
            alt="img"
            className="rounded-lg mx-auto h-[760px] w-full shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default ServicesPage;
