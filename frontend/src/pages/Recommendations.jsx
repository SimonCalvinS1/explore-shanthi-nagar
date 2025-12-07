import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllRecommendations } from "../components/services/api";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedSection = searchParams.get('section');
  const fetchTimeoutRef = useRef(null);
  const lastFetchTimeRef = useRef(0);

  // Mapping categories to section filters
  const sectionMap = {
    'food-dining': ['Restaurants', 'Cafes', 'Food & Dining'],
    'parks-recreation': ['Parks', 'Recreation', 'Outdoor Activities'],
    'shopping': ['Shopping', 'Malls', 'Markets'],
    'entertainment': ['Entertainment', 'Movies', 'Nightlife', 'Events'],
    'education': ['Education', 'Schools', 'Coaching Centers', 'Libraries'],
    'healthcare': ['Healthcare', 'Hospitals', 'Clinics', 'Pharmacies'],
    'transport': ['Transport', 'Auto Stands', 'Taxi Services', 'Public Transport']
  };

  useEffect(() => {
    fetchRecommendations();
    // Cleanup on unmount
    return () => {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, []);

  const fetchRecommendations = async () => {
    // Check cache first
    const cachedData = localStorage.getItem('recommendations');
    if (cachedData) {
      setRecommendations(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    // Prevent multiple rapid requests (429 error fix)
    const now = Date.now();
    const timeSinceLastFetch = now - lastFetchTimeRef.current;
    
    if (timeSinceLastFetch < 2000) {
      // Wait at least 2 seconds between requests
      const waitTime = 2000 - timeSinceLastFetch;
      fetchTimeoutRef.current = setTimeout(() => {
        fetchRecommendations();
      }, waitTime);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      lastFetchTimeRef.current = Date.now();

      console.log('rs: Fetching recommendations...');
      const data = await getAllRecommendations();
      console.log(' ~ Data received:', data);
      
      // Cache the data AFTER successful fetch
      localStorage.setItem('recommendations', JSON.stringify(data));
      setRecommendations(data);
    } catch (err) {
      console.error(" >< Error loading recommendations:", err);

      // Better error messaging
      if (err.response?.status === 429) {
        setError("Too many requests. Please wait a moment and try again.");
      } else {
        setError(err.message || "Failed to fetch recommendations");
      }
    } finally {
      setLoading(false);
    }
  };

  // Filter recommendations based on selected section
  const getFilteredRecommendations = () => {
    if (!selectedSection || !sectionMap[selectedSection]) {
      return recommendations;
    }

    const allowedCategories = sectionMap[selectedSection];
    return recommendations.filter((category) =>
      allowedCategories.some((allowed) =>
        category.category.toLowerCase().includes(allowed.toLowerCase())
      )
    );
  };

  const filteredRecommendations = getFilteredRecommendations();

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

  // No results for selected filter
  if (filteredRecommendations.length === 0) {
    return (
      <div className="w-full py-20">
        <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 text-lg">No recommendations available for this category.</p>
          <a href="/places-to-visit" className="text-blue-600 underline mt-4 inline-block">
            View all recommendations
          </a>
        </div>
      </div>
    );
  }

  // Get section title
  const getSectionTitle = () => {
    const titleMap = {
      'food-dining': 'Food & Dining',
      'parks-recreation': 'Parks & Recreation',
      'shopping': 'Shopping',
      'entertainment': 'Entertainment',
      'education': 'Universities & Colleges',
      'healthcare': 'Healthcare',
      'transport': 'Transport'
    };
    return titleMap[selectedSection] || 'Explore Around Shanti Nagar';
  };

  return (
    <div className="w-full py-20">
      <h1 className="text-3xl text-center font-bold mb-2 text-gray-900">
        {selectedSection ? getSectionTitle() : 'Explore Around Shanti Nagar'}
      </h1>
      
      <div className="space-y-8 px-4 md:px-10">
        {filteredRecommendations.map((category) => (
          <div
            key={category.id}
            className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-10 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
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
                    className="border rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200 bg-white shadow-sm hover:shadow-md"
                  >
                    {/* Display image if available */}
                    {place.image && (
                      <img
                        src={place.image}
                        alt={place.name}
                        className="mb-3 rounded-lg w-full h-48 object-cover"
                      />
                    )}
                    
                    <h3 className="text-xl font-medium mb-2 text-gray-800">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{place.description}</p>
                    <p className="text-sm text-green-800 font-semibold">📍 {place.location}</p>
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