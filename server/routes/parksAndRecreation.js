// ===== server/routes/parksAndRecreation.js =====
import express from 'express';
import ParksAndRecreation from '../models/ParksAndRecreation.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await ParksAndRecreation.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;