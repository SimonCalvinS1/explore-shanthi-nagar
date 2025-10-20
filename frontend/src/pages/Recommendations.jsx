import React, { useState, useEffect } from "react";
import { getAllRecommendations } from "../components/services/api";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('rs: Fetching recommendations...');
      const data = await getAllRecommendations();
      console.log(' ~ Data received:', data);
      setRecommendations(data);
    } catch (err) {
      console.error(" >< Error loading recommendations:", err);
      setError(err.message || "Failed to fetch recommendations");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mb-4"></div>
          <p className="text-gray-600 text-lg">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full py-20">
        <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700 text-lg font-semibold mb-2">⚠️ Error Loading Data</p>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchRecommendations}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (recommendations.length === 0) {
    return (
      <div className="w-full py-20">
        <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 text-lg">No recommendations available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20">
      <h1 className="text-3xl text-center font-bold mb-6 text-gray-900">
        Explore Around Shanti Nagar
      </h1>
      <div className="space-y-8">
        {recommendations.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b pb-2 border-blue-200">
              {category.category}
            </h2>
            
            {/* Show message if category is empty */}
            {category.places.length === 0 ? (
              <p className="text-gray-500 italic">No places available in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.places.map((place) => (
                  <div
                    key={place._id}
                    className="border rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-medium mb-2 text-gray-800">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{place.description}</p>
                    <p className="text-sm text-green-800">📍 {place.location}</p>
                    
                    {/* Display image if available */}
                    {place.image && (
                      <img
                        src={place.image}
                        alt={place.name}
                        className="mt-3 rounded-lg w-full h-48 object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-2xl font-semibold text-pink-800 mt-10">
        🌸 Happy Exploring Bengaluru!
      </p>
    </div>
  );
};

export default Recommendations;