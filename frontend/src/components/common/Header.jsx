import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinkHover = "text-white font-bold hover:text-yellow-300 transition-colors";
    const mobileNav = "text-white";

    return (
        <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-[#154CB3] z-[1000]">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 md:px-8">
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-white">
                    Explore Shanti Nagar
                </h1>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-12">
                    <Link to="/" className={navLinkHover}>Home</Link>
                    <Link to="/about" className={navLinkHover}>About</Link>
                    <Link to="/contact" className={navLinkHover}>Contact</Link>
                    <Link to="/explore" className={navLinkHover}>Explore</Link>
                    <Link to="/places-to-visit" className={navLinkHover}>Places to Visit</Link>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="absolute top-16 left-0 right-0 bg-gray-900 md:hidden">
                        <div className="flex flex-col items-center py-4 space-y-4">
                            <Link to="/" className={mobileNav} onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" className={mobileNav} onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/contact" className={mobileNav} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <Link to="/explore" className={mobileNav} onClick={() => setIsMenuOpen(false)}>Explore</Link>
                            <Link to="/places-to-visit" className={mobileNav} onClick={() => setIsMenuOpen(false)}>Places to Visit</Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;