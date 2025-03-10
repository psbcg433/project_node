import app from "./app.js";
import connectDB from "./db/conn.js";

const port = process.env.PORT || 3000;
const databaseURL = process.env.DB_URL || 'mongodb://localhost:27017';
const databaseName = process.env.DB_NAME || 'urldb';

async function startServer() {
  try {
   
    await connectDB(databaseURL, databaseName);
    console.log('\x1b[36m%s\x1b[0m', `🔌 Database connected: "${databaseName}" at ${databaseURL}`);

  
    app.listen(port, () => {
      console.log('\x1b[32m%s\x1b[0m', `🚀 Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Server startup failed: ${error.message}`);
    process.exit(1);
  }
}

startServer();
