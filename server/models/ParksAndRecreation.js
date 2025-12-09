// ===== server/models/ParksAndRecreation.js =====
import mongoose from 'mongoose';

const parksAndRecreationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

parksAndRecreationSchema.index({ category: 1 });
parksAndRecreationSchema.index({ name: 1 });
parksAndRecreationSchema.index({ createdAt: -1 });

export default mongoose.model('ParksAndRecreation', parksAndRecreationSchema, 'parks_and_recreation');