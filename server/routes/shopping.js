import express from 'express';
import Shopping from '../models/Shopping.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'public, max-age=300');
        
        const shopping = await Shopping.find().lean();
        res.json(shopping);
    } catch (error) {
        console.error('Error fetching shopping:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Shopping.findById(req.params.id).lean();
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching shopping item:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newItem = new Shopping(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating shopping item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;