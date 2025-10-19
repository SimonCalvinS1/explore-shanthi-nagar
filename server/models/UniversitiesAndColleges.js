// ===== server/models/UniversitiesAndColleges.js =====
import mongoose from 'mongoose';

const universitiesAndCollegesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('UniversitiesAndColleges', universitiesAndCollegesSchema, 'universities_and_colleges');