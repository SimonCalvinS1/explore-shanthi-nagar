// ===== server/server.js =====
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
//import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import xss from 'xss';

// Import all routes
import foodAndDiningRoutes from './routes/foodAndDining.js';
import shoppingRoutes from './routes/shopping.js';
import parksRoutes from './routes/parksAndRecreation.js';
import universitiesRoutes from './routes/universitiesAndColleges.js';
import transportationRoutes from './routes/transportation.js';
import carouselRoutes from './routes/carousel.js';
import contactRoutes from "./routes/contactRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import exploreAreaRoutes from "./routes/exploreAreaRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN;

// Custom XSS middleware
app.use((req, res, next) => {
    if (req.body) {
        for (let key in req.body) {
            if (typeof req.body[key] === 'string') {
                req.body[key] = xss(req.body[key]);
            }
        }
    }
    next();
});

// Set secure HTTP headers
app.use(helmet());

// Enable CORS with origin restriction
app.use(cors({
    origin: [
        "https://explore-shanthi-nagar.vercel.app"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


// Parse JSON bodies
app.use(express.json({ limit: '10kb' })); // Limit payload size

// Sanitize data to prevent MongoDB operator injection
//app.use(mongoSanitize());

// Request logging (use 'dev' for local debugging)
app.use(morgan('dev'));

// Rate limiting to prevent brute-force or DDoS attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { error: 'Too many requests, please try again later.' }
});
app.use('/api', limiter);

// Debug log for incoming requests
app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl}`);
    next();
});

// Database Connection
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(' ~ Connected to MongoDB');
        console.log('Database:', mongoose.connection.name);
    })
    .catch(err => console.error(' >< MongoDB connection error:', err));

// Routes
app.use('/api/food', foodAndDiningRoutes);
app.use('/api/shopping', shoppingRoutes);
app.use('/api/parks', parksRoutes);
app.use('/api/universities', universitiesRoutes);
app.use('/api/transportation', transportationRoutes);
app.use('/api/carousel', carouselRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/about', aboutRoutes);
app.use("/api/explore", exploreAreaRoutes);

// Health & Debug Endpoints
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        server: 'running',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/test-collections', async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map(c => c.name);
        res.json({
            message: 'Collections in database',
            collections: collectionNames,
            count: collectionNames.length
        });
    } catch (error) {
        console.error('Collection fetch error:', error);
        res.status(500).json({ error: 'Server error while fetching collections' });
    }
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        requestedUrl: req.originalUrl,
        method: req.method
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    console.log(`CORS Origin: ${ALLOWED_ORIGIN}`);
    console.log(`Routes available under /api`);
});
