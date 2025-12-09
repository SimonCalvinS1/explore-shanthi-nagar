// ===== server/models/Shopping.js =====
import mongoose from 'mongoose';

const shoppingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

shoppingSchema.index({ category: 1 });
shoppingSchema.index({ name: 1 });
shoppingSchema.index({ createdAt: -1 });

export default mongoose.model('Shopping', shoppingSchema, 'shopping');