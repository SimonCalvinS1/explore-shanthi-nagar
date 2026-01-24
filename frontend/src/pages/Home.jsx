import React, { useEffect, useState, useRef } from 'react';
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
    const fetchTimeoutRef = useRef(null);
    const lastFetchTimeRef = useRef(0);

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
        fetchCarouselData();
        
        // Cleanup on unmount
        return () => {
            if (fetchTimeoutRef.current) {
                clearTimeout(fetchTimeoutRef.current);
            }
        };
    }, []);

    const fetchCarouselData = async () => {
        // Prevent multiple rapid requests (429 error fix)
        const now = Date.now();
        const timeSinceLastFetch = now - lastFetchTimeRef.current;
        
        if (timeSinceLastFetch < 3000) {
            // Wait at least 3 seconds between requests
            const waitTime = 3000 - timeSinceLastFetch;
            fetchTimeoutRef.current = setTimeout(() => {
                fetchCarouselData();
            }, waitTime);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            lastFetchTimeRef.current = Date.now();

            console.log('Fetching carousel data...');
            const data = await carouselAPI.getAll();
            console.log('~ Carousel data received');

            setCarouselItems(data);
        } catch (error) {
            console.error('Error fetching carousel data');
            
            // Better error messaging
            if (error.response?.status === 429) {
                setError("Too many requests. Please wait a moment.");
            } else {
                setError("Failed to load carousel");
            }
        } finally {
            setLoading(false);
        }
    };

    const renderCarousel = () => {
        if (loading) return <div className="text-center">Loading...</div>;
        if (error) return (
            <div className="text-center">
                <div className="text-red-500 mb-4">Error loading carousel: {error}</div>
                <button
                    onClick={fetchCarouselData}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Retry
                </button>
            </div>
        );
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
        <div className="flex flex-col justify-center items-center">
            {/* Hero Section */}
            <div className="py-25 flex flex-col justify-center items-center w-full">
                <div className="w-full max-w-7xl text-center">
                    <h1 className="text-3xl font-bold mb-8">Explore Shanti Nagar with Ease!</h1>
                    
                    <p className="text-2xl mb-6">
                        <span className="font-semibold">Welcome to your comprehensive guide</span> to discover the best of Shanti Nagar. 
                    </p>

                    <p className="text-xl mb-6">
                        Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold">Wilson Garden</span>, <span className="font-semibold">Hosur Road</span>, <span className="font-semibold">Double Road</span>, and more. 
                        By making it simple to locate hidden gems and local treasures, we hope to assist you in discovering, appreciating, and connecting with Bengaluru's heart.
                        You'll find suggestions for must-see locations in surrounding communities including Hosur Road, Koramangala, Double Road, Jayangar, and more, regardless of how long you've lived there.
                    </p>

                    <p className="text-xl mb-6">
                        <span className="font-semibold">"Explore Shanti Nagar"</span> is a website designed to help people discover the best of Shanti Nagar and nearby areas in Bengaluru. 
                        We recommend you several good-to-visit spots in Shanti Nagar and nearby areas, be it travel for fun, to enjoy, or to explore this area and nearby places with just a few clicks!
                        We make it easy to explore and discover places in and around Shanti Nagar and will help you in exploring and connecting with Shanti Nagar in an easy manner.
                    </p>

                    <p className="text-xl">
                        <span className="font-semibold">Discover the best places</span>, eateries, parks, and local experiences in Shanti Nagar and its vibrant surroundings in Bengaluru, India.
                        We provide you some recommendations from people who know and love Shanti Nagar and its surrounding areas.
                        We help you to discover hidden gems in and around Shanti Nagar, Bengaluru. You can also find unique spots that 
                        showcase the authentic character of the neighborhood.
                    </p>
                </div>
            </div>

            {/* Top Spots Carousel Section */}
            <div className="w-full bg-gray-50">
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-2xl mt-6 mb-8 font-semibold text-center">Featured Spots</h1>
                    <div className="w-full max-w-[600px] mx-auto mb-8">
                        {renderCarousel()}
                    </div>
                    <p className="mb-6 text-sm text-gray-600 text-center">&copy; Images are subject to copyright.</p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-12 text-center">Why Choose "Explore Shanti Nagar"?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="p-6 bg-blue-100 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">Local Expertise</h3>
                            <p className="text-gray-700">Curated recommendations from people who know and love Shanti Nagar and its surrounding areas.</p>
                        </div>
                        <div className="p-6 bg-green-100 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-green-900">Budget-Friendly</h3>
                            <p className="text-gray-700">Discover affordable dining, entertainment, and activities that won't break the bank.</p>
                        </div>
                        <div className="p-6 bg-purple-100 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 text-purple-900">Hidden Gems</h3>
                            <p className="text-gray-700">Find unique and lesser-known spots that showcase the authentic character of the neighborhood.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-12 text-center">What Are You Looking For?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Restaurants', section: 'food-dining' },
                            { name: 'Cafes', section: 'food-dining' },
                            { name: 'Parks', section: 'parks-recreation' },
                            { name: 'Shopping', section: 'shopping' },
                            { name: 'Entertainment', section: 'entertainment' },
                            { name: 'Universities', section: 'universities-colleges' },
                            { name: 'Cultural Heritage', section: 'culture' },
                            { name: 'Transport', section: 'transport' }
                        ].map((category, idx) => (
                            <Link 
                                key={idx}
                                to={`/places-to-visit?section=${category.section}`}
                                className="p-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <p className="font-semibold text-gray-800">{category.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="w-full bg-gray-50 py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                            <h3 className="font-semibold mb-2">Browse</h3>
                            <p className="text-gray-600 text-sm">Explore different categories and neighborhoods</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                            <h3 className="font-semibold mb-2">Discover</h3>
                            <p className="text-gray-600 text-sm">Find recommendations tailored to your interests</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                            <h3 className="font-semibold mb-2">Plan</h3>
                            <p className="text-gray-600 text-sm">Create your perfect Shanti Nagar itinerary</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                            <h3 className="font-semibold mb-2">Enjoy</h3>
                            <p className="text-gray-600 text-sm">Experience the best of Shanti Nagar!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-12 text-center">What Our Visitors Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Simon Calvin S', text: 'Found amazing hidden cafes I would never have discovered otherwise!' },
                            { name: 'Suriya M', text: 'The budget-friendly recommendations saved me so much money on my weekend outings.' },
                            { name: 'Prasanth K', text: 'Perfect guide for someone new to Bengaluru. Felt like a local within days!' }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="p-6 bg-white border-l-4 border-blue-600 rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-blue-600 text-white py-16 px-4">
                <div className="w-full max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Explore Shanthi Nagar?</h2>
                    <p className="text-xl mb-8">Start discovering amazing places and experiences today</p>
                    <Link to="/explore" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                        Start Exploring
                    </Link>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="w-full py-16 px-4">
                <div className="w-full max-w-7xl mx-auto text-center">
                    <p className="text-xl mb-6">
                        Thank you for visiting our website. This guide is created by a local enthusiast who loves Bengaluru and wants to share easy, practical recommendations for exploring Shanthi Nagar and nearby neighborhoods. We prioritize authentic local experiences, pocket-friendly options, and hidden gems.
                        We hope you find it helpful in exploring and enjoying all that Shanthi Nagar and its surroundings have to offer.
                        If you have any suggestions or feedback, <span>please feel free to <Link to="/contact" className="text-blue-600 underline font-bold">contact us</Link>.</span>
                    </p>
                    <p className="text-2xl mt-8 text-blue-800 font-bold">Have fun exploring!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;