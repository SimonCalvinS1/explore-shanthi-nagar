import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ServiceCard from '../components/services/ServiceCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'

const Home = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ],
        className: "center",
        centerMode: false,
        centerPadding: "0px"
    };

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:5000/api/carousel');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setCarouselItems(data);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarousel();
    }, []);

    const renderCarousel = () => {
        if (loading) return <div className="text-center">Loading...</div>;
        if (error) return <div className="text-red-500">Error loading carousel: {error}</div>;
        if (!carouselItems.length) return <div>No items to display</div>;

        return (
            <Slider {...carouselSettings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                        <div className="carousel-caption">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    };

    return (
        <div className="py-20 flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-3xl font-bold mb-8">Explore Shanthi Nagar with Ease!</h1>
                
                <p className="text-2xl mb-6">
                    <span className="font-semibold">Welcome to your comprehensive guide</span> to discover the best of Shanthi Nagar. 
                </p>

                <p className="text-xl mb-6">
                    Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold">Wilson Garden</span>, <span className="font-semibold">Hosur Road</span>, <span className="font-semibold">Double Road</span>, and more. 
                    By making it simple to locate hidden gems and local treasures, we hope to assist you in discovering, appreciating, and connecting with Bengaluru's heart.
                    You'll find suggestions for must-see locations in surrounding communities including Wilson Garden, Hosur Road, Double Road, and more, regardless of how long you've lived there.
                </p>

                <p className="text-xl mb-6">
                    <span className="font-semibold">Explore Shanti Nagar Now</span> is a website designed to help people discover the best of Shanthi Nagar and nearby areas in Bengaluru. 
                    We recommend you several good-to-visit spots in Shanti Nagar and nearby areas, be it travel for fun, to enjoy, or to explore this area and nearby places with just a few clicks!
                    We make it easy to explore and discover places in and around Shanti Nagar and will help you in exploring and connecting with Shanti Nagar in an easy manner.
                    Discover the best places, eateries, parks, and local experiences in Shanthi Nagar and its vibrant surroundings in Bengaluru, India. <span className="font-semibold">Navigate to our <Link to="/places-to-visit" className="text-blue-600 underline">recommendations here</Link>.</span>
                </p>

                <p className="text-2xl mb-8 text-pink-600 font-bold">Have fun exploring!</p>
                
                <h1 className="text-2xl mt-6 mb-8 font-semibold">Top Spots to Visit: </h1>
                {/* Update carousel container */}
                <div className="w-full max-w-[600px] mx-auto mb-12"> {/* Updated width and margin */}
                    {renderCarousel()}
                </div>
                <p className="mb-6 text-sm text-gray-600">&copy; Images are subject to copyright.</p>

                <p className="text-xl mb-4 font-semibold px-4 md:px-0">Find by Categories:</p>
                <div className="flex flex-col items-center justify-center mb-4 px-4 md:px-8 w-full">
                    {/* First row */}
                    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left mb-4 md:mb-6">
                        <div className="p-4 md:p-6 bg-lime-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">School Institutions</h3>
                            <p className="text-white text-sm md:text-base">Discover university and educational institutions nearby Shanti Nagar.</p>
                        </div>
                        <div className="p-4 md:p-6 bg-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">Transportation</h3>
                            <p className="text-white text-sm md:text-base">Explore travelling options and places in and around Shanti Nagar.</p>
                        </div>
                        <div className="p-4 md:p-6 bg-orange-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">Shopping Districts</h3>
                            <p className="text-white text-sm md:text-base">Find everything from traditional markets to modern shopping centers.</p>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left mb-5">
                        <div className="p-4 md:p-6 bg-teal-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">Parks and Recreation</h3>
                            <p className="text-white text-sm md:text-base">Experience the nature vibes nearby Shanti Nagar.</p>
                        </div>
                        <div className="p-4 md:p-6 bg-red-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">Explore Shanti Nagar</h3>
                            <p className="text-white text-sm md:text-base">Explore many places in and around Shanti Nagar.</p>
                        </div>
                        <div className="p-4 md:p-6 bg-cyan-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">Food Joints</h3>
                            <p className="text-white text-sm md:text-base">Experience the authentic food flavors of Karnataka at local restaurants.</p>
                        </div>
                    </div>
                </div>

                <p className="text-xl">
                    Thank you for visiting our website. This guide is created by a local enthusiast who loves Bengaluru and wants to share easy, practical recommendations for exploring Shanthi Nagar and nearby neighborhoods. We prioritize authentic local experiences, pocket-friendly options, and hidden gems.
                    We hope you find it helpful in exploring and enjoying all that Shanthi Nagar and its surroundings have to offer.
                    If you have any suggestions or feedback, <span className="font-semibold">please feel free to <Link to="/contact" className="text-blue-600 underline">contact us</Link>.</span>
                </p>
            </div>
        </div>
    );
};

export default Home;