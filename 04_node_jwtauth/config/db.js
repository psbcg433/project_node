import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("🌟Connected to database succesfully🎉");
    } catch (error) {
        console.error("❌ Database  connection failed:", error.message);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default connectDB;