import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-blue-600">
                <div className="max-w-7xl mx-auto px-4">
                    <Header />
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-4 py-8 min-h-[calc(100vh-200px)]">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;