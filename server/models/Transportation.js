// ===== server/models/Transportation.js =====
import mongoose from 'mongoose';

const transportationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Transportation', transportationSchema, 'transportation');