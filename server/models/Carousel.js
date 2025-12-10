import mongoose from 'mongoose';

const carouselSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // Can store URL or base64
    link: { type: String, default: '' } // optional redirect link
}, { timestamps: true });

export default mongoose.model('Carousel', carouselSchema, 'carousel');