import { useState, useRef } from 'react';
import Certificate1 from '../../assets/image/fontImage/Certificate1.png'
import Certificate2 from '../../assets/image/fontImage/Certificate2.png'
import Certificate3 from '../../assets/image/fontImage/Certificate3.png'
import Certificate4 from '../../assets/image/fontImage/Certificate4.png'
import Certificate5 from '../../assets/image/fontImage/Certificate5.png'
import Certificate6 from '../../assets/image/fontImage/Certificate6.png'
import Certificate7 from '../../assets/image/fontImage/Certificate7.png'
import Certificate8 from '../../assets/image/fontImage/Certificate8.png'
import Certificate9 from '../../assets/image/fontImage/Certificate9.png'
import carosulebg from '../../assets/image/carosulebg.png'

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const cards = [
    { id: 1, label: 'Global Organic Textile Standard', imgSrc: Certificate1 },
    { id: 2, label: 'WRAP', imgSrc: Certificate2 },
    { id: 3, label: 'Responsible Forestry Certified', imgSrc: Certificate3 },
    { id: 4, label: 'Global Recycled Standard', imgSrc: Certificate4 },
    { id: 5, label: 'Card 5', imgSrc: Certificate5 },
    { id: 6, label: 'Card 6', imgSrc: Certificate6 },
    { id: 7, label: 'Card 7', imgSrc: Certificate7 },
    { id: 8, label: 'Card 8', imgSrc: Certificate8 },
    { id: 9, label: 'Card 9', imgSrc: Certificate9 },
  ];

  const cardsToShow = 4;
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < cards.length - (cardsToShow - 1) ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const moveOffset = e.clientX - startX;
      setDragOffset(moveOffset);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }
    setDragOffset(0);
  };

  return (
    <div
      className="relative bg-cover bg-center h-[450px] my-8"
      style={{ backgroundImage: `url(${carosulebg})` }}
    >
      <div className="flex justify-center items-center h-full relative">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10"
        >
          &lt;
        </button>
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% + ${dragOffset}px))`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/2 md:w-1/4 p-4 flex-shrink-0 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-56 rounded-md border backdrop-blur-lg shadow-lg p-4 flex justify-center items-center">
                  <img
                    src={card.imgSrc}
                    alt={card.label}
                    className="w-44 h-44 rounded-full border"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl rounded-full z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
