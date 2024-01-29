import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='fixed top-0 right-0 bg-orange mr-4 mt-4 rounded-xl z-50'>
        <Hamburger toggled={isOpen} toggle={toggleMenu}/>
      </div>


      {isOpen && (
        <div className="menu" onClick={toggleMenu}>
          <a href="#description" className="menu-text" onClick={toggleMenu}>
            About Me
          </a>
          <a href="#formations" className="menu-text" onClick={toggleMenu}>
            Formations
          </a>
          <a href="#soft-skills" className="menu-text" onClick={toggleMenu}>
            Soft-Skills
          </a>
          <a href="#skills" className="menu-text" onClick={toggleMenu}>
            Skills
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
