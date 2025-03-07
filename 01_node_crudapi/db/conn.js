import mongoose from "mongoose";

const connectDB = async(databaseUrl, databaseName) => {
    try {
        const dbOptions = { dbName: databaseName };
        await mongoose.connect(databaseUrl, dbOptions);
        console.log(`✅ Connected to database: ${databaseName}`);
    } catch (error) {
        console.error("❌ Database connection failed:\n");

    }
};

export default connectDB;
