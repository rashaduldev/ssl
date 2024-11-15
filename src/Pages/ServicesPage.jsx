import Nav from "../components/Navber/Nav";

const ServicesPage = () => {
  return (
    <div>
      <Nav isVisible={true} />
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-28">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Stylorium Sourcing Ltd
      </h1>
      <p className="text-gray-700 mb-4 text-[17px]">
        Stylorium Sourcing Ltd is committed to provide our best customer service and quality assurance at a very competitive price. We provide our customer with samples and inspiration from our collection. In addition, our designer prepares our own design and converts customer concepts in to a real product. We are associated with top rated factories (Woven, jersey and Flat Bed Knitwear) in Bangladesh, India and Pakistan, who are highly organized quality products. Our comprehensive services are not only limited to the best sourcing house, buying arrangement, meeting with best manufacturer in the industry, sample development, sample approval, production quality control and timely shipment but also we take more ownership and responsibilities on our shoulders on your behalf in order to make sure risks are minimized and quality of products are not compromised.
      </p>
      <p className="text-gray-700 mb-4 text-[17px]">
        We have dynamic, talented and well-experienced team with a great office structure, including fabric sourcing, garment technological & compliance. Range of product that we offer for women’s wear, Men’s wear and children wear as well as Non-Textile item.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6 text-[17px]">
        <li>Woven – Tops, bottoms, dress & tailoring</li>
        <li>Outwear – Jackets and coats</li>
        <li>Jersey – Tops, bottoms dresses, sleep wear</li>
        <li>Flat knit – From 3GG TO 14GG</li>
        <li>Circular knit – Jersey and heavy knit.</li>
        <li>Footwear – Leather and synthetic.</li>
        <li>Household – All kinds of household. ISCC, RSC, GRS etc Certified.</li>
        <li>Gloves – Leather gloves, working gloves, gardening gloves.</li>
        <li>Wooden item – All kinds of wooden item.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Payment Modes</h2>
      <p className="text-gray-700 text-[17px]">We accept sales contract TT, L/C, DAP.</p>
    </div>
    </div>
  );
};

export default ServicesPage;