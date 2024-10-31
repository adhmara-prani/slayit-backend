import dotenv from "dotenv";
import connectDB from "./db/index.js"
import app from "./app.js"

dotenv.config()

connectDB().then(() => 
    {
        const TRUEPORT = process.env.PORT || 8000
        app.listen(TRUEPORT, () => {
            console.log(`Server is running at PORT ${TRUEPORT}`);
        })
    })
    .catch((err) => 
    {
        console.log("MongoDB connection failed!", err);
    });