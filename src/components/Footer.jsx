import React from 'react';
import Wa from '../assets/imgs/Wa.png'
import You from '../assets/imgs/You.png'
import Ins from '../assets/imgs/Ins.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 border-t-4 border-purple-500">
      <div className="max-w-[1555px] mx-auto px-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 border-b border-gray-700 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-500 rounded"></div>
            <div className="w-6 h-6 bg-white rounded"></div>
            <div className="w-6 h-6 bg-yellow-400 rounded"></div>
            <span className="ml-3 text-sm">Логотип вашего магазина</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">Наш адрес:</div>
            <div>Москва, ул. Новокосимская д.7</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">График работы:</div>
            <div>Ежедневно с <span className="text-orange-400">9:00 до 21:00</span></div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition">
            Заказать звонок
          </button>
        </div>

      
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          <div>
            <h3 className="font-semibold mb-4">Для покупателей:</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Доставка</a></li>
              <li><a href="#" className="hover:text-orange-400">Гарантия</a></li>
              <li><a href="#" className="hover:text-orange-400">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-orange-400">Отзывы</a></li>
              <li><a href="#" className="hover:text-orange-400">Наши работы</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">О компании:</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">О Нас</a></li>
              <li><a href="#" className="hover:text-orange-400">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-orange-400">Наши работы</a></li>
              <li><a href="#" className="hover:text-orange-400">Контакты</a></li>
              <li><a href="#" className="hover:text-orange-400">Гарантия</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Категории:</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Беседки</a></li>
              <li><a href="#" className="hover:text-orange-400">Бани</a></li>
              <li><a href="#" className="hover:text-orange-400">Площадки</a></li>
              <li><a href="#" className="hover:text-orange-400">Дома</a></li>
              <li><a href="#" className="hover:text-orange-400">Перголы</a></li>
              <li><a href="#" className="hover:text-orange-400">Бренды</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Для регионов<br />(звонок бесплатный)</h3>
            <div className="text-orange-400 text-lg mb-2">8 (800) 800-00-00</div>
            <div className="text-xs text-gray-400 mb-2">Email: your.email@mailbox.ru</div>
            <div className="text-xs text-gray-400">Мы в соцсетях:</div>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-gray-400">
               <img src={Wa} alt="" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={You} alt="" />
              </a>
              <a href="#" className="text-orange-400 hover:text-white">
               <img src={Ins} alt="" />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Для Москвы<br />и Московской области</h3>
            <div className="text-orange-400 text-lg mb-2">8 (800) 700-00-00</div>
            <div className="text-xs text-gray-400 mb-2">Сообщить об ошибке на сайте</div>
            <div className="text-xs text-gray-400">ООО "Оаза Групп"</div>
            <div className="text-xs text-gray-400">ИНН: 7751140879</div>
            <div className="text-xs text-gray-400">ОГРН: 1187746273461</div>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-700 pt-6">
          <div className="text-xs text-gray-400">
            <div className="font-medium mb-1">Публичная оферта</div>
            <div>2013-2021 - Товары для дач, деревянные конструкции под любые нужды</div>
          </div>
          <div className="text-xs text-gray-400">
            <div className="font-medium mb-1">Принимаем к оплате:</div>
            <div className="flex space-x-3 mt-2">
              <img src="https://via.placeholder.com/40x25?text=VISA" alt="VISA" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=Mastercard" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=MIR" alt="MIR" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=Яндекс" alt="Яндекс" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;