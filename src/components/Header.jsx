import React from "react";


const Header = () => {
return (
<>

<div className="container max-w-full bg-[#2B150D] hidden md:block">
<div className="wrapper max-w-[1555px] m-auto">
<div className="nav">
<div className="navbar flex justify-between py-3">
<div className="box flex gap-10 items-center">
<i className="fa-solid fa-location-pin text-yellow-500"></i>
<p className="text-white">Ваш город: Константинополь</p>


<i className="fa-solid fa-location-pin text-yellow-500"></i>
<p className="text-white">Наш офис: Москва, ул. Новокосимская д.7</p>
</div>


<ul className="flex gap-6 items-center">
<li className="text-white">Статьи</li>
<li className="text-white">Оплата</li>
<li className="text-white">Гарантия</li>
<li className="text-white">Дилерам</li>
<li className="text-white">Вакансии</li>
</ul>
</div>
</div>
</div>
</div>
</>
);
};


export default Header;