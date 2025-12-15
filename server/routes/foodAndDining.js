// ===== server/routes/foodAndDining.js =====
import express from 'express';
import FoodAndDining from '../models/FoodAndDining.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await FoodAndDining.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await FoodAndDining.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;