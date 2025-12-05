import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css';

const ExploreArea = () => {
    const { area } = useParams();

    // Area data mapping
    const areaData = {
        'wilson-garden': {
            name: 'Wilson Garden',
            description: 'A vibrant neighborhood known for its upscale dining and boutique shopping',
            attractions: [
                { id: 1, title: 'Wilson Garden Park', category: 'Parks', description: 'Serene green space perfect for morning walks' },
                { id: 2, title: 'Artisan Cafe', category: 'Cafes', description: 'Cozy cafe with specialty coffee and pastries' },
                { id: 3, title: 'Local Market', category: 'Shopping', description: 'Traditional market with fresh produce and local goods' }
            ],
            restaurants: [
                { id: 1, name: 'The Garden Bistro', cuisine: 'Continental', rating: 4.5 },
                { id: 2, name: 'Spice House', cuisine: 'Indian', rating: 4.3 },
                { id: 3, name: 'Noodle Corner', cuisine: 'Asian', rating: 4.2 }
            ]
        },
        'hosur-road': {
            name: 'Hosur Road',
            description: 'A bustling commercial hub with diverse dining options and tech startups',
            attractions: [
                { id: 1, title: 'Tech Park', category: 'Entertainment', description: 'Modern commercial complex with entertainment zones' },
                { id: 2, title: 'Food Street', category: 'Restaurants', description: 'Famous for street food and quick bites' },
                { id: 3, title: 'Shopping Complex', category: 'Shopping', description: 'Multi-brand retail stores and boutiques' }
            ],
            restaurants: [
                { id: 1, name: 'Street Eats', cuisine: 'Street Food', rating: 4.4 },
                { id: 2, name: 'The Grill House', cuisine: 'Barbecue', rating: 4.6 },
                { id: 3, name: 'Curry Central', cuisine: 'Indian', rating: 4.3 }
            ]
        },
        'double-road': {
            name: 'Double Road',
            description: 'A peaceful residential area with excellent local amenities',
            attractions: [
                { id: 1, title: 'Double Road Park', category: 'Parks', description: 'Beautiful park with jogging tracks' },
                { id: 2, title: 'Health Center', category: 'Healthcare', description: 'Modern healthcare facility' },
                { id: 3, title: 'Community Center', category: 'Entertainment', description: 'Social gathering space and events venue' }
            ],
            restaurants: [
                { id: 1, name: 'Home Kitchen', cuisine: 'Indian', rating: 4.4 },
                { id: 2, name: 'Veggie Delight', cuisine: 'Vegetarian', rating: 4.2 },
                { id: 3, name: 'Dessert Corner', cuisine: 'Desserts', rating: 4.5 }
            ]
        },
        'koramangala': {
            name: 'Koramangala',
            description: 'A trendy neighborhood with vibrant nightlife, cafes, and entertainment',
            attractions: [
                { id: 1, title: 'Street Art District', category: 'Entertainment', description: 'Colorful murals and street art' },
                { id: 2, title: 'Koramangala Market', category: 'Shopping', description: 'Shopping hub with boutiques and stores' },
                { id: 3, title: 'Nightlife Quarter', category: 'Entertainment', description: 'Bars, clubs, and lounges' }
            ],
            restaurants: [
                { id: 1, name: 'Trendy Lounge', cuisine: 'Multi-Cuisine', rating: 4.5 },
                { id: 2, name: 'Fusion Bites', cuisine: 'Fusion', rating: 4.4 },
                { id: 3, name: 'Coffee Culture', cuisine: 'Cafe', rating: 4.6 }
            ]
        },
        'jayanagar': {
            name: 'Jayanagar',
            description: 'A peaceful locality known for its family-friendly atmosphere and local culture',
            attractions: [
                { id: 1, title: 'Jayanagar Park', category: 'Parks', description: 'Green space for recreation and relaxation' },
                { id: 2, title: 'Shopping Street', category: 'Shopping', description: 'Traditional shopping area with local shops' },
                { id: 3, title: 'Cultural Center', category: 'Entertainment', description: 'Events and cultural programs' }
            ],
            restaurants: [
                { id: 1, name: 'Traditional Kitchen', cuisine: 'South Indian', rating: 4.3 },
                { id: 2, name: 'Family Diner', cuisine: 'Indian', rating: 4.2 },
                { id: 3, name: 'Local Bakery', cuisine: 'Bakery', rating: 4.4 }
            ]
        },
        'indiranagar': {
            name: 'Indiranagar',
            description: 'A vibrant hub with a mix of traditional and modern attractions',
            attractions: [
                { id: 1, title: '100 Feet Road', category: 'Shopping', description: 'Famous commercial street with shops and cafes' },
                { id: 2, title: 'Indiranagar Lake', category: 'Parks', description: 'Scenic lake area perfect for leisure walks' },
                { id: 3, title: 'Art Gallery District', category: 'Entertainment', description: 'Contemporary art galleries and studios' }
            ],
            restaurants: [
                { id: 1, name: 'Artisan Plates', cuisine: 'Fusion', rating: 4.5 },
                { id: 2, name: 'Spice Lane', cuisine: 'Indian', rating: 4.4 },
                { id: 3, name: 'Brew Haven', cuisine: 'Cafe', rating: 4.6 }
            ]
        }
    };

    const currentArea = areaData[area] || areaData['wilson-garden'];

    return (
        <div className="flex flex-col justify-center items-center">
            {/* Header Section */}
            <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <Link to="/" className="text-blue-100 hover:text-white mb-4 inline-block">← Back to Home</Link>
                    <h1 className="text-4xl font-bold mb-4">{currentArea.name}</h1>
                    <p className="text-xl text-blue-100">{currentArea.description}</p>
                </div>
            </div>

            {/* Quick Navigation */}
            <div className="w-full bg-white shadow-sm py-4 px-4 sticky top-0 z-10">
                <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-2">
                    <p className="text-center text-xl mt-1">Choose Here: </p>
                    <Link to="/explore/wilson-garden" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Wilson Garden</Link>
                    <Link to="/explore/hosur-road" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Hosur Road</Link>
                    <Link to="/explore/double-road" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Double Road</Link>
                    <Link to="/explore/koramangala" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Koramangala</Link>
                    <Link to="/explore/jayanagar" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Jayanagar</Link>
                    <Link to="/explore/indiranagar" className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Indiranagar</Link>
                </div>
            </div>

            {/* Attractions Section */}
            <div className="w-full py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Top Attractions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {currentArea.attractions.map((attraction) => (
                            <div key={attraction.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                                    {attraction.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{attraction.title}</h3>
                                <p className="text-gray-600">{attraction.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Restaurants Section */}
            <div className="w-full bg-gray-50 py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Popular Restaurants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {currentArea.restaurants.map((restaurant) => (
                            <div key={restaurant.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                                <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-500 font-bold">★</span>
                                    <span className="ml-2 font-semibold text-gray-700">{restaurant.rating}/5</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-blue-600 text-white py-16 px-4">
                <div className="w-full max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Explore {currentArea.name}?</h2>
                    <p className="text-xl mb-8">Discover amazing places and create unforgettable memories</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Back to Home
                        </Link>
                        <Link to="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                            Get Recommendations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreArea;