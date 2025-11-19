import React from 'react'
import Ik from '../assets/imgs/Ik.png'
import Re from '../assets/imgs/Re.png'
import Ikn from '../assets/imgs/Ikn.png'
import Pe from '../assets/imgs/Pe.png'
import Ti from '../assets/imgs/Ti.png'

const Images = () => {
  return (
    <div className="container max-w-full px-4">
      <div className="wrapper max-w-[1555px] m-auto">

       
        <div className="grid gap-4 mt-8 grid-cols-2 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-5 justify-items-center">
                                 

          
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4 rounded-lg  gap-4">
            <img src={Ik} alt="" className="w-30 md:w-20 h-30 md:h-20 object-cover rounded-md" />
            <p className="mt-3 md:mt-0 text-sm md:text-base">Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>

        
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4 rounded-lg  gap-4">
            <img src={Re} alt="" className="w-30 md:w-20 h-30 md:h-20 object-cover rounded-md" />
            <p className="mt-3 md:mt-0 text-sm  md:text-base">Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>

        
          <div className="flex flex-col md:flex-row items-center mt-4 md:items-start text-center md:text-left rounded-lg  gap-4">
            <img src={Ikn} alt="" className="w-30 md:w-20 h-30 md:h-20 object-cover rounded-md" />
            <p className="mt-3 md:mt-0 text-sm md:text-base">Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>

        
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4 rounded-lg  gap-4">
            <img src={Pe} alt="" className="w-30 md:w-20 h-30 md:h-20 object-cover rounded-md" />
            <p className="mt-3 md:mt-0 text-sm md:text-base">Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>

        
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4 rounded-lg  gap-4">
            <img src={Ti} alt="" className="w-30 md:w-20 h-30 md:h-20 object-cover rounded-md" />
            <p className="mt-3 md:mt-0 text-sm md:text-base">Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Images
