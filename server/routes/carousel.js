import express from 'express';
import Carousel from '../models/Carousel.js';

const router = express.Router();

// Fetch all carousel items
router.get('/api/carousel', async (req, res) => {
  try {
    const items = await Carousel.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new carousel item (with image URL)
router.post('/api/carousel', async (req, res) => {
  try {
    const item = new Carousel({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image, // must be a valid URL
      link: req.body.link || ''
    });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;