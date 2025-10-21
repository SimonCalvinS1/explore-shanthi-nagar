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
    </div>
  );
}
