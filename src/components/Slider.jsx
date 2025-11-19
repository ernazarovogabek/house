import React, { useState } from 'react';
import Banner from '../assets/imgs/Banner.png'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const visibleSlides = 2;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="wrapper max-w-full bg-[#F9F8F3]">
    <div className="container mx-auto px-4 py-8">
     

      <div className="relative bg-white rounded-xl shadow-md p-6">
       
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {[0,1,2,3].map((i) => (
              <div key={i} className="flex-shrink-0 w-full px-2">
                <div className="rounded-lg p-0 flex items-center justify-center h-auto bg-gray-50">
                  <img
                    src={Banner}
                    alt={`Слайд ${i+1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            aria-label="Oldingi"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            aria-label="Keyingi"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;