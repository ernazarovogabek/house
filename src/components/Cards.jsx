import React from 'react'
import Bs from '../assets/imgs/Bs.png'
import Group from '../assets/imgs/Group.png'
import Pir from '../assets/imgs/Pir.png'
import Star from '../assets/imgs/Star.png'
import GK from '../assets/imgs/GK.png'
import House from '../assets/imgs/House.png'

const Cards = () => {
  return (
    <>
      <div className="container max-w-full">
        <div className="wrapper max-w-[1555px] m-auto">
          <h2 className='text-[40px] mb-6'>Категории</h2>

          
          <div className="hidden md:flex gap-10">

          
            <div className="card w-130 h-142 bg-[#FFF7D9] p-6">
              <h3 className='text-[24px] mb-4'>Беседки</h3>
              <div className="r flex  gap-6">
                <div className="k">
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                </div>
                <div className="m">
                  <p>Подкатегория 4</p>
                  <p>Подкатегория 5</p>
                  <p>Подкатегория 6</p>
                </div>
              </div>
              <div className="gi mt-6">
                <img src={Bs} alt="Беседки" className='m-auto' />
              </div>
            </div>

          
            <div className="box flex flex-col gap-6">
              <div className="boxs bg-[#FFF7D9] w-120 flex items-center gap-4 p-6">
                <div className="v">
                  <h3 className='text-[30px] mb-2'>Бани</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>...</p>
                </div>
                <img src={Group} alt="Бани" className='w-20 h-20' />
              </div>

              <div className="boxs bg-[#FFF7D9] w-120 flex items-center gap-4 p-6">
                <div className="v">
                  <h3 className='text-[30px] mb-2'>Перголы</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>...</p>
                </div>
                <img src={Pir} alt="Перголы" className='w-20 h-20' />
              </div>

              <div className="boxs bg-[#FFF7D9] w-120 flex items-center gap-4 p-6">
                <div className="v">
                  <h3 className='text-[30px] mb-2'>Бренды</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>...</p>
                </div>
                <img src={Star} alt="Бренды" className='w-20 h-20' />
              </div>
            </div>

           
            <div className="box flex flex-col gap-6">
              <div className="boxs bg-[#FFF7D9] w-120 h-66 flex items-center gap-4 p-6">
                <div className="v">
                  <h3 className='text-[28px] mb-2'>Детские площадки</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                  <p>Подкатегория 4</p>
                  <p>Подкатегория 5</p>
                </div>
                <img src={GK} alt="Площадки" className='w-20 h-20' />
              </div>

              <div className="boxs bg-[#FFF7D9] w-120 h-70 flex items-center gap-4 p-6">
                <div className="v">
                  <h3 className='text-[30px] mb-2'>Дома</h3>
                  <p>Подкатегория 1</p>
                  <p>Подкатегория 2</p>
                  <p>Подкатегория 3</p>
                  <p>Подкатегория 4</p>
                </div>
                <img src={House} alt="Дома" className='w-20 h-20' />
              </div>
            </div>

          </div>

          
          <div className="md:hidden grid grid-cols-2 gap-4 p-4">
           
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={Bs} alt="Беседки" className='w-12 h-12' />
              <span className='text-sm font-medium'>Беседки</span>
            </div>

            
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={House} alt="Дома" className='w-12 h-12' />
              <span className='text-sm font-medium'>Дома</span>
            </div>

            
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={GK} alt="Площадки" className='w-12 h-12' />
              <span className='text-sm font-medium'>Площадки</span>
            </div>

            
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={Pir} alt="Перголы" className='w-12 h-12' />
              <span className='text-sm font-medium'>Перголы</span>
            </div>

            
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={Group} alt="Бани" className='w-12 h-12' />
              <span className='text-sm font-medium'>Бани</span>
            </div>

           
            <div className="bg-[#FFF7D9] p-4 rounded-lg flex items-center gap-3">
              <img src={Star} alt="Бренды" className='w-12 h-12' />
              <span className='text-sm font-medium'>Бренды</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cards;