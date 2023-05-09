import mongoose from "mongoose";

// Define the user schema and model using Mongoose
const userSchema = new mongoose.Schema({
    email:{
      type: String,
      unique:true,
      required:true
    },
    username:{
      type:String,
      unique:true,
      required:true
    },
    password:{
      required:true,
      type :String
    }

  });
  
  const User = mongoose.model("User", userSchema);
  
  export default User 