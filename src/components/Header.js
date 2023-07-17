import React, { useState } from 'react';
import { menuItems } from '@data/menuData';

const classes = {
  menuItem: "text-sm font-semibold leading-6 text-white drop-shadow-md transition-colors duration-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 active:text-gray-500",
  mobileMenuItem: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50",
  header: "absolute inset-x-0 top-0 z-50",
  nav: "lg:bg-transparent bg-white flex items-center justify-center p-6 lg:px-8",
  button: "lg:text-white text-black -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lg",
  svg: "h-8 w-8",
  mobileMenu: (isOpen) => `lg:hidden fixed inset-0 z-50 w-full max-w-md right-0 h-full bg-white overflow-y-auto transition-transform duration-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
  overlay: (isOpen) => `lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`, // Fondo oscuro que cubre toda la pantalla
  fixed: "fixed inset-0 z-50",
  fixedInner: "fixed inset-y-0 right-0 z-50 w-full max-w-md mx-auto overflow-y-auto px-6 py-6 sm:ring-1 sm:ring-black/10",
};

const MenuItem = ({ item, onClick, className }) => (
  <a key={item.href} href={item.href} className={className} onClick={onClick}>{item.label}</a>
);

const MenuButton = ({ onClick, children, className, svgClasses, ariaLabel }) => (
  <button onClick={onClick} type="button" className={className}>
    <span className="sr-only">{ariaLabel}</span>
    <svg className={svgClasses} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
      {children}
    </svg>
  </button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={classes.header}>
      <nav className={classes.nav} aria-label="Global">
        <div className={`hidden lg:flex lg:gap-x-12 ${isOpen ? '' : 'hidden'} lg:block`}>
          {menuItems.map((item) => (
            <MenuItem key={item.href} item={item} onClick={handleLinkClick} className={classes.menuItem} />
          ))}
        </div>
        <div className="flex lg:hidden">
          <MenuButton onClick={handleMenuToggle} className={classes.button} svgClasses={classes.svg} ariaLabel="Open main menu">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </MenuButton>
        </div>
      </nav>
      {isOpen && (
        <>
          <button className={classes.overlay(isOpen)} onClick={handleMenuToggle} aria-label="Close menu" /> {/* Aquí cambio el div por un botón */}
          <div className={classes.mobileMenu(isOpen)} role="dialog" aria-modal="true">
            <div className={classes.fixedInner}>
              <div className="flex items-center justify-between">
                <MenuButton onClick={handleMenuToggle} className={classes.button} svgClasses={classes.svg} ariaLabel="Close menu">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </MenuButton>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {menuItems.map((item) => (
                      <MenuItem key={item.href} item={item} onClick={handleLinkClick} className={classes.mobileMenuItem} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
















