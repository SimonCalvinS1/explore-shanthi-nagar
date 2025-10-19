import React from 'react';

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" 
            />
            <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm md:text-base text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;