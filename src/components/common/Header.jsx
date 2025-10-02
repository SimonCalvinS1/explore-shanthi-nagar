import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gray-800 z-[1000]">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-[25px] font-bold text-[#fcfcfc]">
          Explore Shanti Nagar
        </h1>
        <nav className="flex items-center gap-12">
            <Link 
                to="/" 
                className="text-[#fcfcfc] text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200"
            >
                Home
            </Link>
            <Link 
                to="/about" 
                className="text-[#fcfcfc] text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200"
            >
                About
            </Link>
            <Link 
                to="/contact" 
                className="text-[#fcfcfc] text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200"
            >
                Contact
            </Link>
            <Link 
                to="/places-to-visit" 
                className="text-[#fcfcfc] text-lg font-medium hover:text-[#fcfc00] transition-colors duration-200"
            >
                Places to Visit
            </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;