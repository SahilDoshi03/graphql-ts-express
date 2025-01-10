import mongoose from "mongoose";

export const connectDB = async (url: string) =>{
  try{
    await mongoose.connect(url)
    console.log("Connected to DV")
  }catch(e){
    console.log("Error connecting to db", e)
  }
}
