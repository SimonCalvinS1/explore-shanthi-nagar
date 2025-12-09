import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN;

//Middleware

//Custom XSS middleware
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

//Security headers
app.use(helmet());

//Compression - CRITICAL for fast responses
app.use(compression({
    level: 6,
    threshold: 1024 // Only compress responses > 1KB
}));

//CORS
app.use(cors({
    origin: ALLOWED_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

//Body parsing with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

//Request Logging (minimal for speed)
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        if (duration > 1000) {
            console.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
        }
    });
    next();
});

//Database Connection
let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;
    
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority',
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
            minPoolSize: 5
        });
        isConnected = true;
        console.log('~ MongoDB connected');
    } catch (error) {
        console.error('>< MongoDB connection error:', error.message);
        // Don't exit - allow graceful degradation
    }
};

connectDB();

// ===== Health Check Endpoint (CRITICAL) =====
app.get('/api/health', async (req, res) => {
    try {
        await mongoose.connection.db.admin().ping();
        res.json({
            status: 'ok',
            server: 'running',
            database: 'connected',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(503).json({
            status: 'error',
            server: 'running',
            database: 'disconnected',
            error: error.message
        });
    }
});

// ===== Routes =====
import aboutRouter from './routes/about.js';
import carouselRouter from './routes/carousel.js';
import contactRouter from './routes/contact.js';
import foodRouter from './routes/food.js';
import shoppingRouter from './routes/shopping.js';
import parksRouter from './routes/parks.js';
import universitiesRouter from './routes/universities.js';
import transportationRouter from './routes/transportation.js';

app.use('/api/about', aboutRouter);
app.use('/api/carousel', carouselRouter);
app.use('/api/contact', contactRouter);
app.use('/api/food', foodRouter);
app.use('/api/shopping', shoppingRouter);
app.use('/api/parks', parksRouter);
app.use('/api/universities', universitiesRouter);
app.use('/api/transportation', transportationRouter);

// ===== Error Handling =====
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
});

// ===== 404 Handler =====
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// ===== Server Start =====
const server = app.listen(PORT, () => {
    console.log(`--->> Server running on http://localhost:${PORT}`);
});

// ===== Graceful Shutdown =====
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
});
