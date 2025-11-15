import React, { useEffect, useState } from "react";
import { aboutAPI } from "../components/services/api";

export default function About() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await aboutAPI.getAll();
        setImages(data);
      } catch (err) {
        console.error("Error fetching about images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="py-20 container mx-auto p-4 max-w-7xl mb-6">
      <h1 className="text-3xl text-center font-bold mb-6">About This Guide</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">Error: {error}</p>
      ) : (
        images.map((img, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
            <div className="flex-1">
              <p className="font-semibold text-blue-700 text-center text-2xl mb-2">{img.title}</p>
              <p className="text-gray-700 text-xl leading-relaxed">{img.description}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={img.url}
                alt={img.title}
                className="w-78 h-64 object-cover object-center rounded-lg shadow-md"
              />
              <p className="text-sm text-center mt-3 text-gray-500">
                &copy; Images are subject to copyright.
              </p>
            </div>
          </div>
        ))
      )}

      <div className="text-center mt-10">
        <p className="text-2xl font-semibold text-pink-800 mb-3">
          Happy Exploring Bengaluru!
        </p>
        <p className="text-gray-700 text-lg">
          We hope this guide helps you appreciate the vibrant charm, local
          flavors, and community warmth of <strong>Shanthi Nagar</strong>.
        </p>
      </div>
    </div>
  );
}
