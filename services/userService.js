import User from "../models/usermodels.js";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";

export  async function findUser(){
    const users= await User.find()
    return users
  }

  export  async function findSingleUser(userid){
    const users= await User.findById(userid)
    return users
  }  


  export async function createUser(usedata){
    const password = usedata.password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    usedata.password = hashedPassword
    const users= await User.create(usedata)
    return users
  }


  export async function updateUser(userid,usedata){
    const users= await User.findByIdAndUpdate(userid,usedata,{new:true})
    return users
  }

  export async function deleteUser(userid){
    const users= await User.findByIdAndDelete(userid)
    return users
  }
  

  export async function loginUser(usedata){
    const username = usedata.username
    const password = usedata.password

    const user=await User.findOne({username:username})
    if(!user){
      return {message:"invalid username"}
    }
    console.log(user);

   const validpassword = await bcrypt.compare(password,user.password)

   if(!validpassword)
   {return {message:"invalid password"}
  }
 
  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

  return {token: token}
  }

