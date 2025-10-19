import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-gray-900 z-[1000]">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 md:px-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
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
                    <Link to="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
                    <Link to="/about" className="text-white hover:text-blue-300 transition-colors">About</Link>
                    <Link to="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</Link>
                    <Link to="/places-to-visit" className="text-white hover:text-blue-300 transition-colors">Places to Visit</Link>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="absolute top-16 left-0 right-0 bg-gray-900 md:hidden">
                        <div className="flex flex-col items-center py-4 space-y-4">
                            <Link to="/" className="text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" className="text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/contact" className="text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <Link to="/places-to-visit" className="text-white" onClick={() => setIsMenuOpen(false)}>Places to Visit</Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;