// ===== server/routes/shopping.js =====
import express from 'express';
import Shopping from '../models/Shopping.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Shopping.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const item = new Shopping(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;