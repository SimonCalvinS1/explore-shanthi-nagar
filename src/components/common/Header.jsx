import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navLinkClasses = "text-white text-lg font-medium hover:text-yellow-300 relative after:bg-yellow-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:rounded-full after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gray-900 z-[1000]">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-8">
        <h1 className="text-[25px] font-bold text-[#fcfcfc]">
          Explore Shanti Nagar
        </h1>
        <nav className="flex items-center gap-12">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/about" className={navLinkClasses}>About</Link>
            <Link to="/contact" className={navLinkClasses}>Contact</Link>
            <Link to="/places-to-visit" className={navLinkClasses}>Places to Visit</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;