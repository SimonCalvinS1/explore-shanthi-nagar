import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import { carouselAPI } from '../components/services/api';

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
                const data = await carouselAPI.getAll();
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
                            src={item.url}
                            alt={item.title}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                        <div className="carousel-caption mt-3">
                            <h2 className="text-lg font-semibold text-white text-center">
                                {item.title}
                            </h2>
                            <p className="text-sm text-white text-center px-2">{item.description}</p>
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

                <p className="text-xl mb-3">
                    Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold">Wilson Garden</span>, <span className="font-semibold">Hosur Road</span>, <span className="font-semibold">Double Road</span>, and more. 
                    By making it simple to locate hidden gems and local treasures, we hope to assist you in discovering, appreciating, and connecting with Bengaluru's heart.
                    You'll find suggestions for must-see locations in surrounding communities including Hosur Road, Koramangala, Double Road, Jayangar, and more, regardless of how long you've lived there.
                </p>

                <p className="text-xl mb-6">
                    <span className="font-semibold">Explore Shanti Nagar Now</span> is a website designed to help people discover the best of Shanthi Nagar and nearby areas in Bengaluru. 
                    We recommend you several good-to-visit spots in Shanti Nagar and nearby areas, be it travel for fun, to enjoy, or to explore this area and nearby places with just a few clicks!
                    We make it easy to explore and discover places in and around Shanti Nagar and will help you in exploring and connecting with Shanti Nagar in an easy manner.
                    Discover the best places, eateries, parks, and local experiences in Shanthi Nagar and its vibrant surroundings in Bengaluru, India.
                </p>
                
                <h1 className="text-2xl mt-6 mb-3 font-semibold">Top Spots to Visit</h1>
                {/* Update carousel container */}
                <div className="w-full max-w-[600px] mx-auto mb-12"> {/* Updated width and margin */}
                    {renderCarousel()}
                </div>
                <p className="mb-6 text-sm text-gray-600">&copy; Images are subject to copyright.</p>

                <p className="text-xl">
                    Thank you for visiting our website. This guide is created by a local enthusiast who loves Bengaluru and wants to share easy, practical recommendations for exploring Shanthi Nagar and nearby neighborhoods. We prioritize authentic local experiences, pocket-friendly options, and hidden gems.
                    We hope you find it helpful in exploring and enjoying all that Shanthi Nagar and its surroundings have to offer.
                    If you have any suggestions or feedback, <span>please feel free to <Link to="/contact" className="text-blue-600 underline font-bold">contact us</Link>.</span>
                </p>
                <p className="text-2xl mt-5 text-blue-800 font-bold">Have fun exploring!</p>
            </div>
        </div>
    );
};

export default Home;