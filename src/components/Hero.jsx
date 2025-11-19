import React from 'react';
import SD from '../assets/imgs/SD.png';


const products = Array(10).fill({
  id: 1,
  sku: '0000001',
  title: 'Беседка «Дачная» с мангалом и барной стойкой',
  specs: [
    { label: 'Размеры:', value: '4.0 x 3.5 x 2.8 м', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V7m0 0L9 5' },
    { label: 'Площадь:', value: '14 м²', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { label: 'Вместимость:', value: '8 чел.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Гарантия:', value: '10 лет', icon: 'M9 12l2 2 4-4m6 6l-6-6-6 6' },
  ],
  oldPrice: '6 127 500 ₽',
  price: '5 023 900 ₽',
  discount: '-25%',
});

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col h-full">
    <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-500 relative">
      <img src={SD} alt={product.title} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
        {product.discount}
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="text-xs text-gray-500 flex justify-between mb-2"> 
        <span>Артикул:</span>
        <span>{product.sku}</span>
      </div>
      <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base leading-tight line-clamp-2 h-10">
        {product.title}
      </h3>
      
      <div className="space-y-2 text-xs text-gray-600 mb-4 flex-grow">
        {product.specs.map((spec, idx) => (
          <div key={idx} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
            </svg>
            <span className="truncate">
              {spec.label} <span className="text-gray-800">{spec.value}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="line-through text-gray-400 text-xs sm:text-sm">{product.oldPrice}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-gray-800 truncate">{product.price}</span>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-3 sm:px-4 rounded text-xs sm:text-sm transition whitespace-nowrap">
            Купить
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Indexs = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-[1555px] mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Хиты продаж</h2>
          <button className="text-sm font-medium text-gray-600 hover:text-orange-500 transition">
            Все товары 
          </button>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Indexs;