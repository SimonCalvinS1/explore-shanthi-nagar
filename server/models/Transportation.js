// ===== server/models/Transportation.js =====
import mongoose from 'mongoose';

const transportationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

transportationSchema.index({ category: 1 });
transportationSchema.index({ name: 1 });
transportationSchema.index({ createdAt: -1 });

export default mongoose.model('Transportation', transportationSchema, 'transportation');