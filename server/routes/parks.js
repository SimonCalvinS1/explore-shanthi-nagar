import express from 'express';
import Parks from '../models/ParksAndRecreation.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.set('Cache-Control', 'public, max-age=300');
        
        const parks = await Parks.find().lean();
        res.json(parks);
    } catch (error) {
        console.error('Error fetching parks:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Parks.findById(req.params.id).lean();
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching park item:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;