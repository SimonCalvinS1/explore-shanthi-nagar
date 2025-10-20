// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

// Generic fetch helper with error handling
const fetchAPI = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error);
        throw error;
    }
};

// Food & Dining API
export const foodAndDiningAPI = {
    getAll: () => fetchAPI('/api/food'),
    getById: (id) => fetchAPI(`/api/food/${id}`),
    create: (data) => fetchAPI('/api/food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }),
    update: (id, data) => fetchAPI(`/api/food/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }),
    delete: (id) => fetchAPI(`/api/food/${id}`, { method: 'DELETE' })
};

// Shopping API
export const shoppingAPI = {
    getAll: () => fetchAPI('/api/shopping'),
    getById: (id) => fetchAPI(`/api/shopping/${id}`),
    create: (data) => fetchAPI('/api/shopping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
};

// Parks & Recreation API
export const parksAPI = {
    getAll: () => fetchAPI('/api/parks'),
    getById: (id) => fetchAPI(`/api/parks/${id}`)
};

// Universities & Colleges API
export const universitiesAPI = {
    getAll: () => fetchAPI('/api/universities'),
    getById: (id) => fetchAPI(`/api/universities/${id}`)
};

// Transportation API
export const transportationAPI = {
    getAll: () => fetchAPI('/api/transportation'),
    getById: (id) => fetchAPI(`/api/transportation/${id}`)
};

// Fetch all recommendations at once
export const getAllRecommendations = async () => {
    try {
        const [food, shopping, parks, universities, transportation] = await Promise.all([
            foodAndDiningAPI.getAll(),
            shoppingAPI.getAll(),
            parksAPI.getAll(),
            universitiesAPI.getAll(),
            transportationAPI.getAll()
        ]);

        return [
            { id: 1, category: "Food & Dining", places: food },
            { id: 2, category: "Shopping", places: shopping },
            { id: 3, category: "Parks & Recreation", places: parks },
            { id: 4, category: "Universities & Colleges", places: universities },
            { id: 5, category: "Travelling & Transport", places: transportation }
        ];
    } catch (error) {
        console.error('Error fetching all recommendations:', error);
        throw error;
    }
};