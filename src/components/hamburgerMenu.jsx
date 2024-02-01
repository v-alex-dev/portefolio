import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import useTitleSection from '../hooks/useTitleSection';
const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const result = useTitleSection();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <div className='fixed top-0 right-0 bg-orange mr-5 mt-4 rounded-xl z-50'>
        <Hamburger toggled={isOpen} toggle={toggleMenu}/>
      </div>


      {isOpen && (
        <div className="menu" onClick={toggleMenu}>
          {result.map((element, index) => (
            <a key={index} href={"#" + element} className="menu-text" onClick={toggleMenu}>
              {element}
          </a>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
