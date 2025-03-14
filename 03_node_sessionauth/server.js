
import connectDB from './config/dbConnect.js';
import app from './app.js';



// Connect to MongoDB
const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("✅ Database connected successfully.");

        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
    } catch (error) {
        console.error("❌ Error connecting to database:", error);
        process.exit(1); // Exit process with failure
    }
};

startServer();
