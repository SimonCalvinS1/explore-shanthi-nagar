// ===== server/models/FoodAndDining.js =====
import mongoose from 'mongoose';

const foodAndDiningSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

foodAndDiningSchema.index({ category: 1 });
foodAndDiningSchema.index({ name: 1 });
foodAndDiningSchema.index({ createdAt: -1 });

export default mongoose.model('FoodAndDining', foodAndDiningSchema, 'food_and_dining');