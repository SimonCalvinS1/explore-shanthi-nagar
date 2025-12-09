const API_URL = import.meta.env.VITE_API_URL;

// ===== Cache Management =====
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
        console.error('Cache parse error:', error);
        localStorage.removeItem(key);
        return null;
    }
};

const setCachedData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.error('Cache write error:', error);
    }
};

// ===== Keep Backend Alive =====
const keepBackendAlive = () => {
    // Ping immediately on app load
    (async () => {
        try {
            const response = await fetch(`${API_URL}/api/health`, {
                method: 'GET',
                signal: AbortSignal.timeout(3000)
            });
            if (response.ok) {
                console.log('✅ Backend startup ping successful');
            }
        } catch (error) {
            console.log('⚠️ Backend startup ping failed', error);
        }
    })();
    
    // Ping every 10 minutes to keep alive
    const PING_INTERVAL = 10 * 60 * 1000;
    setInterval(async () => {
        try {
            await fetch(`${API_URL}/api/health`, {
                method: 'GET',
                signal: AbortSignal.timeout(3000)
            });
            console.log('✅ Keep-alive ping sent');
        } catch (error) {
            console.log('⚠️ Keep-alive ping failed', error);
        }
    }, PING_INTERVAL);
};

// Initialize keep-alive
keepBackendAlive();

// ===== Fetch Helper with Timeout =====
const fetchAPI = async (endpoint, options = {}) => {
    const timeoutSeconds = options.timeout || 8;
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutSeconds * 1000);
        
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error.message);
        throw error;
    }
};

// ===== API Endpoints =====

export const aboutAPI = {
    getAll: () => fetchAPI("/api/about")
};

export const carouselAPI = {
    getAll: () => fetchAPI('/api/carousel'),
    getById: (id) => fetchAPI(`/api/carousel/${id}`),
    create: (data) => fetchAPI('/api/carousel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
};

export const contactAPI = {
    sendMessage: (data) => fetchAPI('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }),
    getAllMessages: () => fetchAPI('/api/contact'),
    deleteMessage: (id) => fetchAPI(`/api/contact/${id}`, { method: 'DELETE' })
};

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

export const shoppingAPI = {
    getAll: () => fetchAPI('/api/shopping'),
    getById: (id) => fetchAPI(`/api/shopping/${id}`),
    create: (data) => fetchAPI('/api/shopping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
};

export const parksAPI = {
    getAll: () => fetchAPI('/api/parks'),
    getById: (id) => fetchAPI(`/api/parks/${id}`)
};

export const universitiesAPI = {
    getAll: () => fetchAPI('/api/universities'),
    getById: (id) => fetchAPI(`/api/universities/${id}`)
};

export const transportationAPI = {
    getAll: () => fetchAPI('/api/transportation'),
    getById: (id) => fetchAPI(`/api/transportation/${id}`)
};

// ===== Combined Recommendations Fetch =====
export const getAllRecommendations = async () => {
    try {
        // Check cache first (30 second cache)
        const cachedRecommendations = getCachedData('recommendations', 30);
        if (cachedRecommendations) {
            console.log('📦 Using cached recommendations');
            return cachedRecommendations;
        }

        console.log('🔄 Fetching fresh recommendations...');
        
        const startTime = Date.now();
        
        // Fetch all in parallel with timeout
        const [food, shopping, parks, universities, transportation] = await Promise.all([
            foodAndDiningAPI.getAll(),
            shoppingAPI.getAll(),
            parksAPI.getAll(),
            universitiesAPI.getAll(),
            transportationAPI.getAll()
        ]);

        const fetchTime = Date.now() - startTime;
        console.log(`✅ Data fetched in ${fetchTime}ms`);

        const recommendations = [
            { id: 1, category: "Food & Dining", places: food },
            { id: 2, category: "Shopping", places: shopping },
            { id: 3, category: "Parks & Recreation", places: parks },
            { id: 4, category: "Universities & Colleges", places: universities },
            { id: 5, category: "Travelling & Transport", places: transportation }
        ];

        setCachedData('recommendations', recommendations);
        return recommendations;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};