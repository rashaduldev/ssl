import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navber/Nav";

const CategoryDisplay = () => {
  const { category, subcategory } = useParams(); // Retrieve category and subcategory from URL
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        // Find the category
        const selectedCategory = data.categories.find(
          cat => cat.category.toLowerCase() === category.toLowerCase()
        );

        if (selectedCategory) {
          // Check if the category has images directly
          if (selectedCategory.images) {
            setImages(selectedCategory.images);
          } else if (subcategory) {
            // Handle subcategories if available
            const selectedSubcategory = selectedCategory.subcategories?.find(
              subcat => subcat.name.toLowerCase() === subcategory.toLowerCase()
            );

            if (selectedSubcategory) {
              setImages(selectedSubcategory.images);
            } else {
              setImages(null); // No subcategory found
            }
          } else {
            setImages(null); // No images or subcategories found
          }
        } else {
          setImages(null); // No category found
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [category, subcategory]);

  if (!images) return (
    <div>
      <Nav isVisible={true} />
      <p className="mt-36 container mx-auto text-center text-3xl font-bold">
        No images available...
      </p>
    </div>
  );

  return (
    <div>
      <Nav isVisible={true} />
      <div className="mt-28 pb-24 bg-white">
        <div className="container mx-auto">
          <iframe
            width="1560"
            height="315"
            src="https://www.youtube.com/embed/U7jyIVjXldM?autoplay=1&mute=1&si=Vq-fG0spCMccGu6J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="text-5xl font-bold pt-[10px] container mx-auto">
          {subcategory ? `${category} - ${subcategory}` : `${category}`}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 my-10 container mx-auto gap-10">
          {images.map((image, index) => (
            <div key={index} className="card bg-base-100  border">
            <figure>
              <img src={image} alt={`${category} ${index + 1}`} className="w-full h-[450px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Name of products</h2>
            </div>
          </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
