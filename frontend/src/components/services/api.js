// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

// Generic fetch helper (clean, production-safe)
const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// About API
export const aboutAPI = {
  getAll: () => fetchAPI("/api/about"),
};

// Carousel API
export const carouselAPI = {
  getAll: () => fetchAPI("/api/carousel"),
  getById: (id) => fetchAPI(`/api/carousel/${id}`),
};

// Contact API
export const contactAPI = {
  sendMessage: (data) =>
    fetchAPI("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
};

// Food & Dining API
export const foodAndDiningAPI = {
  getAll: () => fetchAPI("/api/food"),
  getById: (id) => fetchAPI(`/api/food/${id}`),
};

// Shopping API
export const shoppingAPI = {
  getAll: () => fetchAPI("/api/shopping"),
  getById: (id) => fetchAPI(`/api/shopping/${id}`),
};

// Parks & Recreation API
export const parksAPI = {
  getAll: () => fetchAPI("/api/parks"),
  getById: (id) => fetchAPI(`/api/parks/${id}`),
};

// Universities & Colleges API
export const universitiesAPI = {
  getAll: () => fetchAPI("/api/universities"),
  getById: (id) => fetchAPI(`/api/universities/${id}`),
};

// Transportation API
export const transportationAPI = {
  getAll: () => fetchAPI("/api/transportation"),
  getById: (id) => fetchAPI(`/api/transportation/${id}`),
};

// Fetch all recommendations at once
export const getAllRecommendations = async () => {
  const [food, shopping, parks, universities, transportation] =
    await Promise.all([
      foodAndDiningAPI.getAll(),
      shoppingAPI.getAll(),
      parksAPI.getAll(),
      universitiesAPI.getAll(),
      transportationAPI.getAll(),
    ]);

  return [
    { id: 1, category: "Food & Dining", places: food },
    { id: 2, category: "Shopping", places: shopping },
    { id: 3, category: "Parks & Recreation", places: parks },
    { id: 4, category: "Universities & Colleges", places: universities },
    { id: 5, category: "Travelling & Transport", places: transportation },
  ];
};
