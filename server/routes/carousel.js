import express from 'express';
import Carousel from '../models/Carousel.js';

const router = express.Router();

// Fetch all carousel items
router.get('/', async (req, res) => {
  try {
    const items = await Carousel.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;