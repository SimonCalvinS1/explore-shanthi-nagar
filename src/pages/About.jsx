import React from 'react';

export default function About() {
    return (
        <div className="py-20 container mx-auto p-4 max-w-3xl">
            <h1 className="text-3xl text-center font-bold mb-10">About This Guide</h1>
            <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
                <img
                    src="https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg"
                    alt="Lalbagh Botanical Garden"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                />
                <div>
                    <p className="mb-2">
                        <span className="font-semibold">Explore Shanthi Nagar</span> is your friendly guide to discovering the best places, eateries, parks, and local experiences in Shanthi Nagar and its vibrant surroundings in Bengaluru, India.
                    </p>
                    <p className="mb-2">
                        Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold">Wilson Garden</span>, <span className="font-semibold">Hosur Road</span>, <span className="font-semibold">Double Road</span>, and more.
                    </p>
                </div>
            </div>
            <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
                <div>
                    <p className="mb-2">
                        <span className="font-semibold">What can you find here?</span>
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li>Local food joints and restaurants</li>
                        <li>Parks and recreational spaces</li>
                        <li>Shopping areas and markets</li>
                        <li>Historic and cultural landmarks</li>
                        <li>Tips for getting around and exploring nearby places</li>
                    </ul>
                </div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6F-ikwxPIKrHTejgXkZRy9Q9tJvC1thYaA&s"
                    alt="KR Market"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                />
            </div>
            <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Freedom Park"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                />
                <div>
                    <p>
                        Our goal is to help you explore, enjoy, and connect with the heart of Bengaluru by making it easy to find local gems and hidden treasures. <span className="font-semibold">Happy exploring!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}