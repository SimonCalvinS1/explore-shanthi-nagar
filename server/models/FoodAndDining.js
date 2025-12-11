// ===== server/models/FoodAndDining.js =====
import mongoose from 'mongoose';

const foodAndDiningSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('FoodAndDining', foodAndDiningSchema, 'food_and_dining');