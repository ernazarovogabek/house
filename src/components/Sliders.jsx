import React, { useState } from 'react';
import Gu from '../assets/imgs/Gu.png'

const Sliders = () => {
  const [current, setCurrent] = useState(0);

  const showReview1 = current === 0;
  const showReview2 = current === 1;
  const showReview3 = current === 2;

  const next = () => {
    if (current === 0) setCurrent(1);
    else if (current === 1) setCurrent(2);
    else setCurrent(0);
  };

  const prev = () => {
    if (current === 2) setCurrent(1);
    else if (current === 1) setCurrent(0);
    else setCurrent(2);
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-[1555px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Отзывы наших клиентов</h2>

       
        <div className="relative h-80  overflow-hidden rounded-lg bg-white shadow-sm">
        
          {showReview1 && (
            <div className="absolute w-150 inset-0 p-6 transition-opacity duration-500 ease-in-out">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Алексей С.А.</h3>
                  <p className="text-xs text-gray-500 mt-1">28 июня 2021</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    <span>⭐⭐⭐⭐⭐</span>
                
                  </div>
                  <span className="ml-1 text-xs text-gray-500">Общая оценка: (4.8)</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                «Цена хорошая, все соответствует ожиданиям. Подбирала персону для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»
              </p>
              <button className="text-orange-500 text-sm font-medium hover:underline">Читать полностью</button>
            </div>
          )}

         
          {showReview2 && (
            <div className="absolute w-150 inset-0 p-6 transition-opacity duration-500 ease-in-out">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Елена К.</h3>
                  <p className="text-xs text-gray-500 mt-1">15 мая 2021</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                   <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="ml-1 text-xs text-gray-500">Общая оценка: (5.0)</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                «Очень довольна покупкой! Товар пришёл быстро, упакован аккуратно. Качество превзошло ожидания. Спасибо за отличный сервис!»
              </p>
              <button className="text-orange-500 text-sm font-medium hover:underline">Читать полностью</button>
            </div>
          )}

        
          {showReview3 && (
            <div className="absolute w-150 inset-0 p-6 transition-opacity duration-500 ease-in-out">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Игорь М.</h3>
                  <p className="text-xs text-gray-500 mt-1">3 апреля 2021</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                   <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="ml-1 text-xs text-gray-500">Общая оценка: (4.0)</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                «Хороший выбор и адекватные цены. Единственное — доставка задержалась на два дня, но в целом всё нормально.»
              </p>
              <button className="text-orange-500 text-sm font-medium hover:underline">Читать полностью</button>
            </div>
          )}

       
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

       
        <div className="text-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition duration-200">
            Открыть все отзывы
          </button>
        </div> 
      </div>
    </section>
  );
};

export default Sliders;