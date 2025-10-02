import React from 'react';

const Recommendations = () => {
    const recommendations = [
        {
            id: 1,
            category: 'Food & Dining',
            places: [
                { name: 'MTR Restaurant', description: 'Famous South Indian restaurant known for its dosas and filter coffee', location: 'Lalbagh Road' },
                { name: 'Victoria Restaurant', description: 'Local favorite for North Indian and Chinese cuisine', location: 'Double Road' }
            ]
        },
        {
            id: 2,
            category: 'Shopping',
            places: [
                { name: 'KR Market', description: 'Historic wholesale market for fresh produce and flowers', location: 'Krishna Rajendra Market' },
                { name: 'Commercial Street', description: 'Popular shopping destination for clothing and accessories', location: '15 minutes from Shanthi Nagar' }
            ]
        },
        {
            id: 3,
            category: 'Parks & Recreation',
            places: [
                { name: 'Lalbagh Botanical Garden', description: 'Historic garden with diverse plant species and a glass house', location: 'Lalbagh Road' },
                { name: 'Freedom Park', description: 'Historic location converted into a public space', location: 'Near Gandhi Nagar' }
            ]
        }
    ];

    return (
        <div className="w-full py-20">
            <h1 className="text-3xl font-bold mb-8">Explore Around Shanthi Nagar</h1>
            <div className="space-y-8">
                {recommendations.map((category) => (
                    <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">{category.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.places.map((place, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-medium mb-2">{place.name}</h3>
                                    <p className="text-gray-600 mb-2">{place.description}</p>
                                    <p className="text-sm text-blue-500">📍 {place.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;