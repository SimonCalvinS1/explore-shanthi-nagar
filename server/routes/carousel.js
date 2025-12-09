import express from 'express';
import Carousel from '../models/Carousel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'public, max-age=600');
        
        const carouselItems = await Carousel.find().limit(10).lean();
        res.json(carouselItems);
    } catch (error) {
        console.error('Error fetching carousel:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Carousel.findById(req.params.id).lean();
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching carousel item:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newItem = new Carousel(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating carousel item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;