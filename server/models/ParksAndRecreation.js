// ===== server/models/ParksAndRecreation.js =====
import mongoose from 'mongoose';

const parksAndRecreationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('ParksAndRecreation', parksAndRecreationSchema, 'parks_and_recreation');