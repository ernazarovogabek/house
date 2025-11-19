import React from 'react';
import TE from '../assets/imgs/TE.png'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">

      
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">

        
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Немного о нас</h2>

          <div className="w-20 h-0.5 bg-orange-500 mb-6"></div>

          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est.
            Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan.
            Ultrices ipsum nulla consequat malesuada enim mollis est.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl text-orange-500 mb-3 text-[100px]">“</div>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est.
              Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan.
              Ultrices ipsum nulla consequat malesuada enim mollis est. Venenatis, sagittis, amet ornare donec purus suscipit nam sodales.
              Varius sit amet nullam dictumst massa consequat odio faucibus.
            </p>
            <p className="text-xs text-gray-500 mt-4">Никита Данилов, Руководитель компании</p>
          </div>
        </div>

        
        <div className="lg:w-1/2">
          <img
            src={TE}
            alt="Компания"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;