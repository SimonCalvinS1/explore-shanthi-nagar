import React from 'react';

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-200 h-80 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;