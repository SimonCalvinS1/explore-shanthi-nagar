// ===== server/routes/transportation.js =====
import express from 'express';
import Transportation from '../models/Transportation.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Transportation.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;