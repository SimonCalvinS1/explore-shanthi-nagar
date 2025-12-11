// ===== server/models/UniversitiesAndColleges.js =====
import mongoose from 'mongoose';

const universitiesAndCollegesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

universitiesAndCollegesSchema.index({ category: 1 });
universitiesAndCollegesSchema.index({ name: 1 });
universitiesAndCollegesSchema.index({ createdAt: -1 });

export default mongoose.model('UniversitiesAndColleges', universitiesAndCollegesSchema, 'universities_and_colleges');