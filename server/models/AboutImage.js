import mongoose from "mongoose";

const aboutImageSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String
}, { collection: "about_images" });

aboutImageSchema.index({ category: 1 });
aboutImageSchema.index({ name: 1 });
aboutImageSchema.index({ createdAt: -1 });

export default mongoose.model("AboutImage", aboutImageSchema);
