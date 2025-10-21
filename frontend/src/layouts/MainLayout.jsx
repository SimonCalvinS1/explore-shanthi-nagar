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
            <Footer />
        </div>
    );
};

export default MainLayout;