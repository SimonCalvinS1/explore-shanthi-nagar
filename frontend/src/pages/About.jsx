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
    <div className="py-20 container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl text-center font-bold mb-6">About This Guide</h1>
      <div className="flex-1">
          <p>
            This guide is crafted by a local enthusiast who wants to
            share easy and authentic experiences around{" "}
            <strong>Shanthi Nagar</strong>. We focus on pocket-friendly options,
            accessibility, and local favorites that often go unnoticed.
          </p>
          <p className="mt-4">
            We regularly update listings and travel tips based on{" "}
            <strong>community feedback</strong>. Have a favorite restaurant,
            park, or shop to recommend? You can reach out via our{" "}
            <span className="text-blue-600 font-semibold">Contact page</span>.
          </p>
        </div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">
          Discover the Neighborhood
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">Error: {error}</p>
      ) : (
        images.map((img, index) => (
          <div key={index} className="text-xl mb-8 flex flex-col md:flex-row items-center gap-8">
            <div>
              <img
                src={img.url}
                alt={img.title}
                className="w-200 h-45 rounded-lg shadow-md"
              />
              <p className="text-sm text-center mt-3 mb-5 text-gray-600">
                &copy; {img.title}
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">{img.title}</p>
              <p>{img.description}</p>
            </div>
          </div>
        ))
      )}

      <p className="text-center text-lg mt-10 text-gray-700">
        This guide is updated regularly with help from the community ❤️
      </p>

      <div className="text-center mt-16">
        <p className="text-2xl font-semibold text-pink-800 mb-3">
          🌸 Happy Exploring Bengaluru!
        </p>
        <p className="text-gray-700 text-lg">
          We hope this guide helps you appreciate the vibrant charm, local
          flavors, and community warmth of <strong>Shanthi Nagar</strong>.
        </p>
      </div>
    </div>
  );
}
