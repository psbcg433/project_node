import dotenv from 'dotenv';
import connectDB from './db/conn.js';
import app from './app.js';

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;
const dbs_url = process.env.DATABASE_URL || "mongodb://localhost:27017";
const dbs_name = "crudDB";

const startServer = async () => {
    try {
        await connectDB(dbs_url, dbs_name);
        app.listen(port, () => {
            console.log(`🚀 SERVER IS RUNNING ON PORT: ${port}`);
        });
    } catch (err) {
        console.error("❌ FAILED TO START SERVER.......\n", err);
        process.exit(1); 
    }
};

startServer();
