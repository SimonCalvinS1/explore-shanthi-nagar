import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;

    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log("MongoDB Connected (cached)");
};
