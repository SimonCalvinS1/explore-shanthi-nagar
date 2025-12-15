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

export default router;