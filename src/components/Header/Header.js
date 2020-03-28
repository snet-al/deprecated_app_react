import React from 'react';

function Header({ children }) {
  return (
    <header className="fixed z-10 w-full shadow-md flex items-center bg-primary-500 text-white flex">
      {children}
    </header>
  );
}

export default Header;
