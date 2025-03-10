import mongoose from "mongoose";

const connectDB = async (DB_URL, DB_NAME) => {
  const DB_OPTIONS = {
    dbName: DB_NAME
  };

  try {
    await mongoose.connect(DB_URL, DB_OPTIONS);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Error connecting to the database:', error.message);
    process.exit(1); 
  }
};

export default connectDB;
