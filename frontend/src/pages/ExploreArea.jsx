import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css';

const ExploreArea = () => {
    const { area } = useParams();

    // Area data mapping
    const areaData = {
        "wilson-garden": {
            name: "Wilson Garden",
            description:
            "A centrally located neighborhood known for its hospitals, parks, cafés, and close access to key Bengaluru landmarks.",
            attractions: [
            {
                id: 1,
                title: "Lalbagh Botanical Garden",
                category: "Parks & Nature",
                description:
                "A historic 240-acre botanical garden famous for its glasshouse, annual flower shows, lake, and centuries-old trees.",
            },
            {
                id: 2,
                title: "NIMHANS Brain Museum",
                category: "Museum",
                description:
                "A unique scientific museum showcasing preserved human brain specimens and educational exhibits related to neuroscience.",
            },
            {
                id: 3,
                title: "Adugodi Junction Street Market",
                category: "Local Experience",
                description:
                "A bustling local market area connecting Wilson Garden, Koramangala, and Dairy Circle with street shops and eateries.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Pai Vihar",
                cuisine: "South Indian · Vegetarian",
                rating: 4.2,
            },
            {
                id: 2,
                name: "Taj Hotel (Original)",
                cuisine: "South Indian · Biriyani · Non-veg",
                rating: 4.3,
            },
            {
                id: 3,
                name: "Chinita Real Mexican Food",
                cuisine: "Mexican · Casual Dining",
                rating: 4.5,
            },
            ],
        },

        // ---------------------------------------------
        "hosur-road": {
            name: "Hosur Road",
            description:
            "A major arterial road known for tech parks, colleges, hospitals, and excellent connectivity across South Bengaluru.",
            attractions: [
            {
                id: 1,
                title: "NIMHANS Convention Center",
                category: "Events & Exhibitions",
                description:
                "A popular venue hosting conferences, academic events, medical summits, and public programs.",
            },
            {
                id: 2,
                title: "Forum Mall, Koramangala (Near Hosur Road)",
                category: "Shopping & Entertainment",
                description:
                "One of Bengaluru’s oldest malls featuring PVR cinemas, retail stores, cafés, and dining spots.",
            },
            {
                id: 3,
                title: "Shivoham Shiva Temple",
                category: "Spiritual",
                description:
                "A serene spiritual complex featuring a 65-foot tall Lord Shiva statue along with meditation and cultural areas.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Barbeque Nation (Forum Mall)",
                cuisine: "Buffet · Barbecue",
                rating: 4.4,
            },
            {
                id: 2,
                name: "Empire Restaurant",
                cuisine: "North Indian · Arabian · Non-Veg",
                rating: 4.3,
            },
            {
                id: 3,
                name: "Meghana Foods",
                cuisine: "Andhra · Biriyani",
                rating: 4.5,
            },
            ],
        },

        // ---------------------------------------------
        "double-road": {
            name: "Double Road (Shanti Nagar)",
            description:
            "A lively area connecting Shanti Nagar Bus Station, Residency Road, and Wilson Garden with parks and local eateries.",
            attractions: [
            {
                id: 1,
                title: "Shantinagar Bus Station",
                category: "Transport Hub",
                description:
                "A major KSRTC bus terminal with excellent connectivity to many parts of Bengaluru and nearby towns.",
            },
            {
                id: 2,
                title: "Sri Lakshmi Narayana Temple",
                category: "Temple",
                description:
                "A peaceful neighborhood temple known for its vibrant festivals and daily rituals.",
            },
            {
                id: 3,
                title: "Double Road Park",
                category: "Park",
                description:
                "A compact urban green space popular for morning walks and relaxation.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Mavalli Tiffin Room (MTR) – Lalbagh Road",
                cuisine: "South Indian · Vegetarian",
                rating: 4.6,
            },
            {
                id: 2,
                name: "Hotel Ogara's",
                cuisine: "Kerala · Non-Veg",
                rating: 4.2,
            },
            {
                id: 3,
                name: "Vidyaarthi Bhavan Fast Food",
                cuisine: "South Indian",
                rating: 4.4,
            },
            ],
        },

        // ---------------------------------------------
        koramangala: {
            name: "Koramangala",
            description:
            "A top lifestyle destination in Bengaluru known for cafés, nightlife, high-end restaurants, and urban culture.",
            attractions: [
            {
                id: 1,
                title: "Forum Mall Koramangala",
                category: "Shopping & Entertainment",
                description:
                "A popular urban mall featuring retail stores, restaurants, cafés, and cinemas.",
            },
            {
                id: 2,
                title: "Sree Krishna Temple 4th Block",
                category: "Temple",
                description:
                "A peaceful place of worship popular with locals and known for its beautiful festivals.",
            },
            {
                id: 3,
                title: "Koramangala 80 Feet Road",
                category: "Lifestyle",
                description:
                "One of the city's most happening stretches with cafés, lounges, boutiques, and co-working spaces.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Truffles",
                cuisine: "Burgers · Continental",
                rating: 4.5,
            },
            {
                id: 2,
                name: "Gilly’s Restobar",
                cuisine: "Casual Dining · Continental · Indian",
                rating: 4.3,
            },
            {
                id: 3,
                name: "Hole in the Wall Cafe",
                cuisine: "Breakfast · Café",
                rating: 4.6,
            },
            ],
        },

        // ---------------------------------------------
        jayanagar: {
            name: "Jayanagar",
            description:
            "A peaceful, green residential area known for temples, parks, food joints, and shopping.",
            attractions: [
            {
                id: 1,
                title: "Jayanagar 4th Block Shopping Complex",
                category: "Shopping",
                description:
                "A historic marketplace with local stores, bookstores, clothing outlets, and eateries.",
            },
            {
                id: 2,
                title: "MN Krishna Rao Park",
                category: "Parks",
                description:
                "A large and peaceful park excellent for morning walks, sports, and family outings.",
            },
            {
                id: 3,
                title: "Ragigudda Anjaneya Temple",
                category: "Temple",
                description:
                "A popular hilltop temple with scenic views and a calm devotional atmosphere.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Taaza Thindi",
                cuisine: "South Indian Fast Food",
                rating: 4.6,
            },
            {
                id: 2,
                name: "Go Native",
                cuisine: "Organic · Vegetarian",
                rating: 4.4,
            },
            {
                id: 3,
                name: "Maiyas Restaurant",
                cuisine: "South Indian · Vegetarian",
                rating: 4.3,
            },
            ],
        },

        // ---------------------------------------------
        indiranagar: {
            name: "Indiranagar",
            description:
            "A stylish, upbeat area known for upscale dining, nightlife, boutique shopping, and lush greenery.",
            attractions: [
            {
                id: 1,
                title: "100 Feet Road Shopping Street",
                category: "Shopping",
                description:
                "A major high-street stretch featuring boutiques, cafes, stores, and nightlife spots.",
            },
            {
                id: 2,
                title: "Indiranagar Park",
                category: "Parks",
                description:
                "A clean and well-maintained neighborhood park popular for jogging and fitness.",
            },
            {
                id: 3,
                title: "Monkey Bar Area (12th Main Road)",
                category: "Nightlife",
                description:
                "A buzzing nightlife zone packed with pubs, lounges, and live-music venues.",
            },
            ],
            restaurants: [
            {
                id: 1,
                name: "Toit",
                cuisine: "Brewpub · Continental",
                rating: 4.6,
            },
            {
                id: 2,
                name: "Corner House",
                cuisine: "Ice Cream · Desserts",
                rating: 4.5,
            },
            {
                id: 3,
                name: "The Fatty Bao",
                cuisine: "Asian · Japanese · Fusion",
                rating: 4.4,
            },
            ],
        },
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
                            Suggest Feedback
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreArea;