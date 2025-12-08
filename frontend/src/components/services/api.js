const API_URL = import.meta.env.VITE_API_URL;

const getCachedData = (key, durationSeconds = 30) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    try {
        const { data, timestamp } = JSON.parse(cached);
        const CACHE_DURATION = durationSeconds * 1000;
        
        if (Date.now() - timestamp > CACHE_DURATION) {
            localStorage.removeItem(key);
            return null;
        }
        return data;
    } catch (error) {
        console.error('Error parsing cached data:', error);
        localStorage.removeItem(key);
        return null;
    }
};

const setCachedData = (key, data) => {
    localStorage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now()
    }));
};

const keepBackendAlive = () => {
    const PING_INTERVAL = 10 * 60 * 1000; // Ping every 10 minutes (Render spins down after 15)
    
    // Ping immediately on app load
    (async () => {
        try {
            await fetch(`${API_URL}/api/health`, { method: 'GET' });
            console.log('Backend pinged on startup - keeping alive');
        } catch (error) {
            console.log('Initial ping failed:', error.message);
        }
    })();
    
    // Then ping every 10 minutes
    setInterval(async () => {
        try {
            const response = await fetch(`${API_URL}/api/health`, { method: 'GET' });
            if (response.ok) {
                console.log('Backend pinged - keeping alive', new Date().toLocaleTimeString());
            }
        } catch (error) {
            console.log('Ping failed (backend may be sleeping):', error.message);
        }
    }, PING_INTERVAL);
};

// Call this on app initialization
keepBackendAlive();

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

// About API
export const aboutAPI = {
  getAll: () => fetchAPI("/api/about"),
};

// Carousel API
export const carouselAPI = {
    getAll: () => fetchAPI('/api/carousel'),
    getById: (id) => fetchAPI(`/api/carousel/${id}`),
    create: (data) => fetchAPI('/api/carousel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
};

// Contact API
export const contactAPI = {
    sendMessage: (data) =>
        fetchAPI('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }),
    getAllMessages: () => fetchAPI('/api/contact'),
    deleteMessage: (id) =>
        fetchAPI(`/api/contact/${id}`, {
            method: 'DELETE'
        })
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
        // Try to use cache first (60 second cache)
        const cachedRecommendations = getCachedData('recommendations', 60);
        if (cachedRecommendations) {
            console.log('Using cached recommendations');
            return cachedRecommendations;
        }

        console.log('Fetching fresh recommendations from API...');
        
        const [food, shopping, parks, universities, transportation] = await Promise.all([
            foodAndDiningAPI.getAll(),
            shoppingAPI.getAll(),
            parksAPI.getAll(),
            universitiesAPI.getAll(),
            transportationAPI.getAll()
        ]);

        const recommendations = [
            { id: 1, category: "Food & Dining", places: food },
            { id: 2, category: "Shopping", places: shopping },
            { id: 3, category: "Parks & Recreation", places: parks },
            { id: 4, category: "Universities & Colleges", places: universities },
            { id: 5, category: "Travelling & Transport", places: transportation }
        ];

        setCachedData('recommendations', recommendations);
        console.log('Recommendations cached');
        return recommendations;
    } catch (error) {
        console.error('Error fetching all recommendations:', error);
        throw error;
    }
};