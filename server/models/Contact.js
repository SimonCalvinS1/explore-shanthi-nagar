import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address"
      ]
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [5, "Message should be at least 5 characters long"],
      maxlength: [1000, "Message cannot exceed 1000 characters"]
    }
  },
  {
    timestamps: true,
    collection: "contact_form"
  }
);

export default mongoose.model("Contact", contactSchema);
