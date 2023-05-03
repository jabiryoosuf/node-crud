import  Express  from "express";
import {userCreate, userSingleGet, usersget} from "../controllers/userController";
const userRoute=Express()

userRoute.get('/user',usersget)
userRoute.get('/user/:id',userSingleGet)
userRoute.post('/user/new',userCreate)
userRoute.put('/user/update/:id')
userRoute.delete('/user/delete/:id')

export default userRoute 



// import User from "../models/usermodels.js";
// import  express  from "express";

// const Route=express()
// // all view
// Route.get('/user', async (req, res) => {
//     const users= await User.find()
//       res.send(users);
//     });
  
//   // single view
//     Route.get('/user/:id',async (req, res) => {
//       const userid = req.params.id
//       const user = await User.findById(userid)
//       res.send(user);
//     });
  
//   // create 
//     Route.post('/user/new',async (req, res) => {
//       const userdata = req.body
//      const user= await User.create(userdata)
//       res.send(user)
//     });
  
//     // update 
//     Route.put('/user/update/:id',async (req, res) => {
//       const userid = req.params.id
//       const data = req.body
//      const updateuser = await User.findByIdAndUpdate(userid, data,{new:true})
//       res.send(updateuser);
//     });
  
//       // delete 
//     Route.delete('/user/delete/:id',async (req, res) => {
//           const userid =req.params.id
//           const deleteduser= await User.findByIdAndDelete(userid)
      
//           res.send(deleteduser);
//         });

//         export default Route 

