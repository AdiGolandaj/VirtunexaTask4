import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full  absolute z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-3xl pl-30 flex">
          <img className='scale-60 -m-12 -mt-10' src="./acory.png" alt="" srcset="" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
        <nav className={`md:flex md:items-center gap-25 pr-20 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">
            HOME
          </a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">
            TRY ON
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;