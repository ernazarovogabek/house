import React, { useState } from 'react';

const Texts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${name}! Вы подписались на рассылку.`);
   
  };

  return (
    <section className="py-6 px-4 bg-[#F9F8F3]">
      <div className="max-w-[1555px] mx-auto flex p-6 flex-col justify-between sm:flex-row items-center gap-4">
        
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          Хотите быть в курсе выгодных предложений, акций и новинок?
        </p>

       
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          
          <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm w-full sm:w-32"/>

          
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm w-full sm:w-40"/>

         
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition text-sm whitespace-nowrap"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
};

export default Texts;