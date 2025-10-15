import React from 'react';

export default function About() {
    return (
        <div className="py-20 container mx-auto p-4 max-w-5xl">
            <h1 className="text-3xl text-center font-bold mb-6">About This Guide</h1>
            <div className="text-xl mb-8 flex flex-col md:flex-row items-center gap-8">
                <img
                    src="https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg"
                    alt="Lalbagh Botanical Garden"
                    className="w-full md:w-1/3 rounded-lg shadow-md"
                />
                <div>
                    <p className="mb-4">
                        <span className="font-semibold text-blue-700">Explore Shanthi Nagar</span> is your friendly guide to discovering the best places, eateries, parks, and local experiences in Shanthi Nagar and its vibrant surroundings in Bengaluru, India.
                    </p>
                    <p className="mb-2">
                        Whether you're new to the area or a long-time resident, you'll find recommendations for must-visit spots in nearby neighborhoods like <span className="font-semibold text-green-700">Wilson Garden</span>, <span className="font-semibold text-orange-600">Hosur Road</span>, <span className="font-semibold text-yellow-600">Double Road</span>, and more. <span className="text-xl font-semibold text-pink-800">Happy exploring!</span>
                    </p>
                </div>
            </div>

            <div className="text-xl mb-8 flex flex-col md:flex-row items-center gap-6">
                <p>
                    Our goal is to help you explore, enjoy, and connect with the heart of Bengaluru by making it easy to find local gems and hidden treasures. In this website, you can find some places to roam around Shanti Nagar like: 
                </p>
            </div>

            <div className="text-xl mb-8 flex flex-col md:flex-row items-center gap-6">
                <ul className="list-disc list-inside mb-2">
                    <li>Local food joints and restaurants</li>
                    <li>Parks and recreational spaces</li>
                    <li>Shopping areas and markets</li>
                    <li>Historic and cultural landmarks</li>
                    <li>Tips for getting around and exploring nearby places</li>
                </ul>
            </div>

            <p className="text-center mt-10 mb-5">&copy; Images are subject to copyright.</p>
        </div>
    );
}