import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
        console.log("\n MongoDB connection successful!")
    } catch (error) {
        console.log("MongoDB connection failed!", error);
        process.exit(1);
    }
}

export default connectDB