import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <header className="fixed top-0 left-0 right-0 bg-gray-900 z-[1000]">
                <div className="max-w-7xl mx-auto">
                    <Header />
                </div>
            </header>
            <main className="pt-10 min-h-[calc(100vh-80px)]">
                {children}
            </main>
            <footer className="bg-gray-900 text-white py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center">&copy; 2025 Explore Shanthi Nagar. All rights reserved.</p>
                    <p className="text-center">Contact us: explore.shantinagar@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;