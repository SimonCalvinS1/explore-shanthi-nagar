import express from 'express';
import Food from '../models/FoodAndDining.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'public, max-age=300');
        
        const food = await Food.find().lean();
        res.json(food);
    } catch (error) {
        console.error('Error fetching food:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Food.findById(req.params.id).lean();
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching food item:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newItem = new Food(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const item = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Item deleted' });
    } catch (error) {
        console.error('Error deleting food item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;