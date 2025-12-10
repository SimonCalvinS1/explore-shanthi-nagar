// ===== server/routes/parksAndRecreation.js =====
import express from 'express';
import ParksAndRecreation from '../models/ParksAndRecreation.js';

const router = express.Router();

router.get('/api/parks', async (req, res) => {
    try {
        const items = await ParksAndRecreation.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/api/parks', async (req, res) => {
    try {
        const item = new ParksAndRecreation(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;