// ===== server/server.js =====
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

// Routes
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

app.set('trust proxy', 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

app.use(cors({
  origin: [
    process.env.CORS_ORIGIN
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json({ limit: '20kb' }));

app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', limiter);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('~ MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

/* -------------------- ROUTES -------------------- */
app.use('/api/food', foodAndDiningRoutes);
app.use('/api/shopping', shoppingRoutes);
app.use('/api/parks', parksRoutes);
app.use('/api/universities', universitiesRoutes);
app.use('/api/transportation', transportationRoutes);
app.use('/api/carousel', carouselRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/explore', exploreAreaRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
