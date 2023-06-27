import React from 'react';

const Header = () => (
  <header className="container mx-auto">
    <div className="flex justify-between">
      <span className="font-bold text-xl">Mi Portafolio</span>
      <nav>
        <ul className="flex space-x-4">
          <li><a className="text-gray-500" href="#projects">Proyectos</a></li>
          <li><a className="text-gray-500" href="#skills">Habilidades</a></li>
          <li><a className="text-gray-500" href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
