import mongoose from "mongoose";

 
 export default async function dbconnection(){
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/crud")
      console.log("monogo db connecetd");
      
    } catch (error) {
      console.log("monogo db not connecttd");
  
      throw error
    }
  }