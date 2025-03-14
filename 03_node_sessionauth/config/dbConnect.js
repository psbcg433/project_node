import mongoose from "mongoose";


console.log("DEBUG config/dbConnect.js: Starting File.....");

const connectDb = async (DBURL) => {
    try{
        await mongoose.connect(DBURL)
        console.log("DEBUG config/dbConnect.js: Connected to MongoDB.....");
    }
    catch(error)
    {
        console.log("DEBUG config/dbConnect.js: Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}

console.log("DEBUG config/dbConnect.js: Exiting file.....");
export default connectDb;