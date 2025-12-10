// ===== server/routes/universitiesAndColleges.js =====
import express from 'express';
import UniversitiesAndColleges from '../models/UniversitiesAndColleges.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await UniversitiesAndColleges.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const item = new UniversitiesAndColleges(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;