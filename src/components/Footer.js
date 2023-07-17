import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} {process.env.GATSBY_PAGE_TITLE || 'yourwebtitle.dev'}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

