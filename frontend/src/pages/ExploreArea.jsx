// src/pages/ExploreArea.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// Adjust path if your api.js is located somewhere else.
// From /src/pages the usual path is ../components/services/api or ../services/api
import { exploreAreaAPI } from "../components/services/api";
import "../index.css";

const ExploreArea = () => {
  const { area } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // wait until slug exists
    if (!area) {
      console.log("ExploreArea: slug not ready yet");
      return;
    }

    let mounted = true;
    const fetchArea = async () => {
      setLoading(true);
      setError(null);
      console.log("ExploreArea: fetching slug =", area);

      try {
        const result = await exploreAreaAPI.getBySlug(area);
        console.log("ExploreArea: fetch result:", result);

        // defensive: if result is not an object, throw to go to catch
        if (!result || typeof result !== "object") {
          throw new Error("Invalid response shape from API");
        }

        // normalize data to ensure attractions/restaurants arrays exist
        const normalized = {
          slug: result.slug || area,
          name: result.name || "Unnamed area",
          description: result.description || "",
          attractions: Array.isArray(result.attractions) ? result.attractions : [],
          restaurants: Array.isArray(result.restaurants) ? result.restaurants : []
        };

        if (mounted) {
          setData(normalized);
        }
      } catch (err) {
        console.error("ExploreArea: error fetching area:", err);
        // If invalid slug, redirect to default
        if (area !== "wilson-garden") {
          console.log("ExploreArea: redirecting to /explore/wilson-garden");
          navigate("/explore/wilson-garden", { replace: true });
        } else {
          if (mounted) setError("Failed to load area details.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchArea();
    return () => {
      mounted = false;
    };
  }, [area, navigate]);

  // Render states
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-xl font-semibold">
        Loading area details…
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-xl text-red-600">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-64 text-xl text-gray-600">
        No data available
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <Link to="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl text-blue-100">{data.description}</p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="w-full bg-white shadow-sm py-4 px-4 sticky top-0 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-2">
          <p className="text-center text-xl mt-1">Choose Here: </p>
          {[ "wilson-garden","hosur-road","double-road","koramangala","jayanagar","indiranagar" ]
            .map((slug) => (
              <Link
                key={slug}
                to={`/explore/${slug}`}
                className={`px-4 py-2 rounded ${
                  slug === area ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {slug.replace("-", " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </Link>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <div className="w-full py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.attractions.length ? data.attractions.map((a, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  {a.category || "Attraction"}
                </div>
                <h3 className="text-xl font-semibold mb-2">{a.title || "Untitled"}</h3>
                <p className="text-gray-600">{a.description || "No description available."}</p>
              </div>
            )) : (
              <p className="text-center text-gray-600">No attractions listed for this area.</p>
            )}
          </div>
        </div>
      </div>

      {/* Restaurants */}
      <div className="w-full bg-gray-50 py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.restaurants.length ? data.restaurants.map((r, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{r.name || "Unnamed"}</h3>
                <p className="text-gray-600 mb-3">{r.cuisine || ""}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold">★</span>
                  <span className="ml-2 font-semibold text-gray-700">{r.rating || "-"}/5</span>
                </div>
              </div>
            )) : (
              <p className="text-center text-gray-600">No restaurants listed for this area.</p>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-blue-600 text-white py-16 px-4">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore {data.name}?</h2>
          <p className="text-xl mb-8">Discover amazing places and create unforgettable memories</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Back to Home</Link>
            <Link to="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">Suggest Feedback</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreArea;
