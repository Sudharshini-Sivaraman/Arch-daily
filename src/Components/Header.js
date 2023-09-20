import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">S Architecture</h1>
        <ul className="flex items-center flex space-x-4">
          <li><a className="text-white hover:text-blue-200 flex items-center justify-center" href="/">Home</a></li>
          <li><a className="text-white hover:text-blue-200" href="/about">About</a></li>
          <li><a className="text-white hover:text-blue-200" href="/contact">Projects</a></li>
          <li><a className="text-white hover:text-blue-200" href="/contact">Services</a></li>
          <li><a className="text-white hover:text-blue-200" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
