import React, { useState } from "react";
import Img from "../assets/imgs/Img.png";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
     
      <div className="w-full bg-white shadow-md p-4 flex items-center justify-between md:hidden">

       
        <div className="flex items-center gap-3">
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? (
               <i className="fa-solid fa-bars text-2xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl"></i>
            )}
          </button>

   
          <input
            type="text"
            placeholder="Поиск..."
            className="p-2 w-40 h-10 bg-gray-100 rounded-lg border border-gray-300"
          />
        </div>

        
        <i className="fa-solid fa-phone text-2xl"></i>
      </div>

     
      {open && (
        <div className="bg-white p-4 md:hidden">
          <ul className="space-y-4 text-center">
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-yellow-400" /> Лучшие цены
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-yellow-400" /> Бесплатная доставка
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-yellow-400" /> Гарантия 3 года
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-check text-yellow-400" /> 1 000 товаров
            </li>
          </ul>

          <div className="mt-4  items-center gap-3">
            <p>8 (800) 800-00-00</p>
              <p>8 (495) 700-00-00</p>
          </div>
        </div>
      )}

     
      <div className="container max-w-full bg-[#F9F8F3] hidden md:block">
        <div className="wrapper max-w-[1555px] m-auto">
          <div className="card flex gap-20">
            <div className="box"></div>

            <div className="tavar mt-2">
              <ul className="flex gap-10 ml-50">
                <li><i className="fa-solid fa-check text-yellow-400"></i>Лучшие цены</li>
                <li><i className="fa-solid fa-check text-yellow-400"></i>Бесплатная доставка</li>
                <li><i className="fa-solid fa-check text-yellow-400"></i>Гарантия от 3х лет</li>
                <li><i className="fa-solid fa-check text-yellow-400"></i>Более 1 000 товаров</li>
              </ul>
            </div>

            <div className="boxs flex gap-15 mt-2">
              <p><i className="fa-regular fa-clock text-yellow-400"></i>Ежедневно с 9:00 до 21:00</p>
              <p><i className="fa-regular fa-envelope text-yellow-500"></i>youremail@mailbox.ru</p>
            </div>
          </div>

          <div className="phone flex mt-4">
            <div className="t gap-30 flex">
              <img src={Img} alt="" className="top-50" />
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                className="p-4 w-80 h-10 mt-3 bg-white"
              />
            </div>

            <div className="k w-100 h-10 mt-3 bg-white">
              <button className="bg-amber-300 w-30 h-10 ml-70">Найти</button>
            </div>

            <div className="n gap-15 mt-2 ml-20">
              <p>8 (800) 800-00-00</p>
              <p>8 (495) 700-00-00</p>
            </div>

            <button className="mt-3 w-50 h-10 ml-20 bg-[#FF7A1B] gap-10 rounded-2xl">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
