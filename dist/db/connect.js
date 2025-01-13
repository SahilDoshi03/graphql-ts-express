import mongoose from "mongoose";
export const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Connected to DB");
    }
    catch (e) {
        console.log("Error connecting to db", e);
        throw new Error("Error connecting to db");
    }
};
