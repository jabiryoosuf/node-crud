import { findUser, findSingleUser, createUser, updateUser, deleteUser, loginUser } from "../services/userService.js";


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
  
  // // update 
  // app.put('/user/update/:id', express.json(),async (req, res) => {
  //   const userid = req.params.id
  //   const data = req.body
  //  const updateuser = await User.findByIdAndUpdate(userid, data,{new:true})
  //   res.send(updateuser);
  // });
  export  async function  userUpdate(req,res){
    try {
      const userid = req.params.id
       const userdata=req.body
        const user=await updateUser(userid,userdata)
        res.send(user)
    } catch (error) {
        console.log(error);
        throw error
    }
  }
  

  export  async function  userDelete(req,res){
    try {
      const userid = req.params.id
        const user=await deleteUser(userid)
        res.send(user)
    } catch (error) {
        console.log(error);
        throw error
    }
  }




  export  async function  userLogin(req,res){
    try {
        const usedata=req.body
        const user=await loginUser(usedata)
        res.send(user)
    } catch (error) {
        console.log(error);
        throw error
    }
  }
  
