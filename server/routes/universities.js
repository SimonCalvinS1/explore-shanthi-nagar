import express from 'express';
import Universities from '../models/UniversitiesAndColleges.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'public, max-age=300');
        
        const universities = await Universities.find().lean();
        res.json(universities);
    } catch (error) {
        console.error('Error fetching universities:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Universities.findById(req.params.id).lean();
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching university item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;