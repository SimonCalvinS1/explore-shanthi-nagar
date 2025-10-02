import React from 'react';

const Recommendations = () => {
    const recommendations = [
        {
            id: 1,
            category: "Food & Dining",
            places: [
                { name: "MTR Restaurant", description: "Famous South Indian restaurant known for its dosas and filter coffee", location: "Lalbagh Road" },
                { name: "Victoria Restaurant", description: "Local favorite for North Indian and Chinese cuisine", location: "Double Road" },
                { name: "Victoria Restaurant", description: "Local favorite for North Indian and Chinese cuisine", location: "Double Road" },
                { name: "Victoria Restaurant", description: "Local favorite for North Indian and Chinese cuisine", location: "Double Road" },
                { name: "Victoria Restaurant", description: "Local favorite for North Indian and Chinese cuisine", location: "Double Road" },
            ]
        },
        {
            id: 2,
            category: 'Shopping',
            places: [
                { name: "KR Market", description: "Historic wholesale market for fresh produce and flowers", location: "Krishna Rajendra Market" },
                { name: "Commercial Street", description: "Popular shopping destination for clothing and accessories", location: "Tasker Town, Shivaji Nagar" },
                { name: "Commercial Street", description: "Popular shopping destination for clothing and accessories", location: "Tasker Town, Shivaji Nagar" },
                { name: "Commercial Street", description: "Popular shopping destination for clothing and accessories", location: "Tasker Town, Shivaji Nagar" },
                { name: "Commercial Street", description: "Popular shopping destination for clothing and accessories", location: "Tasker Town, Shivaji Nagar" },
            ]
        },
        {
            id: 3,
            category: 'Parks & Recreation',
            places: [
                { name: "Richmond Park", description: "Exercise and garden based park", location: "Richmond Park Road" },
                { name: "Cubbon Park", description: "Exercise and garden based park", location: "Queen's Road" },
                { name: "Bethel Layout Park", description: "Exercise and garden based park", location: "Bhetal Layout, Langford Town" },
                { name: "Kitturu Rani Chennamma Park",  description: "Exercise and garden based park", location: "3rd Cross Road, NGO Colony, Wilson Garden" },
                { name: "Lalbagh Botanical Garden", description: "Historic garden with diverse plant species and a glass house", location: "Hosur Main Road" },
                { name: "Bugle Rock Park", description: "Tree canopy featuring gardens, waterfalls and fountains", location: "Bugle Rock Road, Basavanagudi" },
                { name: "M N Krishna Rao Park", description: "Park with a kid's playground", location: "Krishna Rajendra Road, Basavanagudi" },
                { name: "Freedom Park", description: "Historic location converted into a public space", location: "Seshadri Road, Gandhi Nagar" },
            ]
        },
        {
            id: 4,
            category: 'Universities & Colleges',
            places: [
                { name: 'CHRIST (Deemed to be University)', description: '', location: 'Hosur Road, S G Palya' },
                { name: 'CHRIST (Deemed to be University)', description: '', location: 'Hosur Road, S G Palya' },
                { name: 'CHRIST (Deemed to be University)', description: '', location: 'Hosur Road, S G Palya' },
                { name: 'CHRIST (Deemed to be University)', description: '', location: 'Hosur Road, S G Palya' },
            ]
        },
        {
            id: 5,
            category: 'Travelling & Transport',
            places: [
                { name: 'Shanti Nagar Bus Stop', description: '', location: 'Shanti Nagar, Near BTS Main Road' },
                { name: 'Double Road Bus Stop', description: '', location: 'Double Road (a.k.a Kengal Hanumanthaiah Road), Shanti Nagar' },
                { name: 'Richmond Circle Bus Stop', description: '', location: 'Hosur Road, S G Palya' },
                { name: 'Anepalya Bus Stop', description: '', location: 'Hosur Road, S G Palya' },
            ]
        },
    ];

    return (
        <div className="w-full py-20">
            <h1 className="text-3xl font-bold mb-8">Explore Around Shanti Nagar</h1>
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