import React, { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-[1555px] m-auto mt-2">

          
          <div className="flex justify-between items-center p-4 md:hidden">
            
            <button
              onClick={() => setOpen(!open)}
              className="flex m-auto items-center  gap-2 bg-[#FFD634] px-4 py-2 rounded-md"
            >
              <i className="fa-solid fa-bars text-center text-xl"></i>
              Каталог
            </button>

            
          </div>

       
          {open && (
            <div className="bg-white p-4 space-y-3 md:hidden">
              <p className="text-center">О компании</p>
              <p className="text-center">Отзывы</p>
              <p className="text-center">Наши работы</p>
              <p className="text-center">Доставка</p>
              <p className="text-center">Контакты</p>
            </div>
          )}

        
          <div className="hidden md:flex justify-between items-center p-4">
            <button className="flex items-center gap-2 bg-[#FFD634] px-6 py-3 rounded-md">
              <i className="fa-solid fa-bars text-xl"></i>
              Каталог товаров
            </button>

            <p>О компании</p>
            <p>Отзывы</p>
            <p>Наши работы</p>
            <p>Доставка</p>
            <p>Контакты</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;