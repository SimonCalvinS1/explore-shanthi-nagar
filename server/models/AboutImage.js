import mongoose from "mongoose";

const aboutImageSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String
}, { collection: "about_images" });

export default mongoose.model("AboutImage", aboutImageSchema);
