import React, { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">Arch Daily</div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden bg-black absolute top-16 left-0 right-0 z-10 text-white">
              <li className="text-white hover:text-gray-300 py-2 text-center">
                <a href="/">Home</a>
              </li>
              <li className="text-white hover:text-gray-300 py-2 text-center">
                <a href="/about">About</a>
              </li>
              <li className="text-white hover:text-gray-300 py-2 text-center">
                <a href="/services">Services</a>
              </li>
              <li className="text-white hover:text-gray-300 py-2 text-center">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="text-white hover:text-gray-300 py-2 text-center">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          )}
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
