import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const docH2 = document.querySelectorAll('h2');
    setResult(Array.from(docH2).map(element => element.textContent));
    
  }, []);

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
