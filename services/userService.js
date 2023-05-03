import User from "../models/usermodels.js";

export  async function findUser(){
    const users= await User.find()
    return users
  }

  export  async function findSingleUser(userid){
    const users= await User.findById(userid)
    return users
  }  


  export async function createUser(usedata){
    const users= await User.create(usedata)
    return users
  }
  
