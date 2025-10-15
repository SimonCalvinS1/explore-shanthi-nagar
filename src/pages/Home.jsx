import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ServiceCard from '../components/services/ServiceCard';
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

    const placeHighlights = [
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "Lalbagh Botanical Garden",
            description: "A historic garden with diverse plant species and beautiful landscapes"
        },
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "KR Market",
            description: "One of the largest flower and vegetable markets in Asia"
        },
        {
            url: "https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg",
            title: "Freedom Park",
            description: "Historical location converted into a recreational space"
        }
    ];

    return (
        <div className="py-20 flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-3xl font-bold mb-6">Explore Shanthi Nagar with Ease!</h1>
                <p className="text-xl mb-6">
                    <span className="font-semibold">Welcome to your comprehensive guide</span> to discover the best of Shanthi Nagar and nearby areas in Bengaluru. 
                    Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold">Wilson Garden</span>, <span className="font-semibold">Hosur Road</span>, <span className="font-semibold">Double Road</span>, and more. 
                </p>

                <div className="flex flex-col items-center justify-center mb-4">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6">
                        <div className="p-6 bg-red-400 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Historical Landmarks</h3>
                            <p className="text-white">Discover ancient temples, historic buildings, and cultural heritage sites.</p>
                        </div>
                        <div className="p-6 bg-blue-400 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Transportation</h3>
                            <p className="text-white">Explore travelling options and places in and around Shanti Nagar.</p>
                        </div>
                        <div className="p-6 bg-orange-400 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Shopping Districts</h3>
                            <p className="text-white">Find everything from traditional markets to modern shopping centers.</p>
                        </div>
                    </div>
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                        <div className="p-6 bg-green-400 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Parks and Recreation</h3>
                            <p className="text-white">Experience the authentic flavors of Karnataka at local restaurants.</p>
                        </div>
                        <div className="p-6 bg-pink-400 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Explore Shanti Nagar</h3>
                            <p className="text-white">Explore and explore many places in and around Shanti Nagar.</p>
                        </div>
                        <div className="p-6 bg-red-500 rounded-lg shadow-md">
                            <h3 className="text-white text-xl font-bold mb-2">Food Joints</h3>
                            <p className="text-white">Experience the authentic food flavors of Karnataka at local restaurants.</p>
                        </div>
                    </div>
                </div>

                {/* Featured Places Carousel */}
                <h2 className="text-2xl font-bold mb-6">Featured Places to Visit</h2>
                <div className="w-[600px] h-[400px] mb-12 mx-auto">
                    <Slider {...carouselSettings}>
                        {placeHighlights.map((place, index) => (
                            <div key={index} className="px-2">
                                <ServiceCard 
                                    title={place.title}
                                    description={place.description}
                                    image={place.url}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <p className="mb-5 text-sm text-gray-600">&copy; Images are subject to copyright.</p>
            </div>
        </div>
    );
};

export default Home;