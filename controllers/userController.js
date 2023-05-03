import User from "../models/usermodels";
import { findUser, findSingleUser, createUser } from "../services/userService";


// // all view
// Route.get('/user', async (req, res) => {
//     const users= await User.find()
//     res.send(users);
//     });

  export async function  usersget(req,res){
    try {
        const users = await findUser()
        res.send(users);
    } catch (error) {
        console.log(error);
        throw error
    }
  } 


//   // single view
//     Route.get('/user/:id',async (req, res) => {
//       const userid = req.params.id
//       const user = await User.findById(userid)
//       res.send(user);
//     });
  export async function  userSingleGet(req,res){
    try {
        const userid = req.params.id
        const users = await findSingleUser(userid)
        res.send(users);
    } catch (error) {
        console.log(error);
        throw error
    }
  } 
  // create 
//     Route.post('/user/new',async (req, res) => {
//       const userdata = req.body
//      const user= await User.create(userdata)
//       res.send(user)
//     });

 export  async function  userCreate(req,res){
    try {
        const usedata=req.body
        const user=await createUser(usedata)
        res.send(user)
    } catch (error) {
        console.log(error);
        throw error
    }
  }