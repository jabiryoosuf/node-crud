import mongoose from "mongoose";

// Define the user schema and model using Mongoose
const userSchema = new mongoose.Schema({
    name: String,
    place: String,
    password:String
  });
  
  const User = mongoose.model("User", userSchema);
  
  export default User 