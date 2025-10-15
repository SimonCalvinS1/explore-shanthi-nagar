import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const carouselImages = [
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "Image 1"
        },
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "Image 2"
        },
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "Image 3"
        }
    ];

    return (
        <div className="py-20 flex flex-col items-center justify-center min-h-[calc(100vh-300px)]">
            <div className="w-full max-w-4xl text-center mb-12">
                <h1 className="text-2xl font-bold mb-6">Explore Shanthi Nagar with ease!</h1>
                <p className="text-m mb-4">
                    Your comprehensive guide to discovering the best of Shanthi Nagar and nearby areas in Bengaluru.
                </p>

                {/* Image Carousel */}
                <div className="w-[600px] h-[400px] mb-15 mx-auto">
                    <Slider {...carouselSettings}>
                        {carouselImages.map((image, index) => (
                            <div key={index} className="px-2">
                                <img 
                                    src={image.url} 
                                    alt={image.title}
                                    className="w-full h-[400px] object-cover rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mt-2">{image.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
                <p className="mb-5">&copy; Images are subject to copyright.</p>
                {/* Featured Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-5">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Local Attractions</h3>
                        <p>Discover parks, markets, and cultural landmarks in and around Shanthi Nagar.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Food & Dining</h3>
                        <p>Find the best restaurants and street food spots in the neighborhood.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Shopping</h3>
                        <p>Explore local markets and shopping destinations near Shanthi Nagar.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Local Attractions</h3>
                        <p>Discover parks, markets, and cultural landmarks in and around Shanthi Nagar.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Food & Dining</h3>
                        <p>Find the best restaurants and street food spots in the neighborhood.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-[#154CB3] text-xl font-bold mb-2">Shopping</h3>
                        <p>Explore local markets and shopping destinations near Shanthi Nagar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;