import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 }).lean();
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();
        
        res.status(201).json({ 
            success: true,
            message: 'Message received',
            data: newMessage 
        });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Message deleted' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;