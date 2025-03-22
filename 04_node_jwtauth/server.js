import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import generateKeys from "./config/keys.js";

dotenv.config();

const port = process.env.PORT || '5000';
const database_uri = process.env.DATABASE_URI || 'mongodb://localhost:27017/jwtauthdatabase';

async function startServer() {
    try {
        // Step 1: Connect to the database
        await connectDB(database_uri);

        // Step 2: Generate keys
        await generateKeys();

        // Step 3: Dynamically import the app module after keys are generated
        const { default: app } = await import('./app.js');

        // Step 4: Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Error starting server....");
        console.log(error);
    }
}

// Start the server
startServer();