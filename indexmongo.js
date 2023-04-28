import  express  from "express";
import mongoose from "mongoose";

const app=express()
const port =4000;

// Define the user schema and model using Mongoose
const userSchema = new mongoose.Schema({
  name: String,
  place: String,
  password:String
});

const User = mongoose.model("User", userSchema);

// all view
app.get('/user', async (req, res) => {
  const users= await User.find()
    res.send(users);
  });

// single view
  app.get('/user/:id',async (req, res) => {
    const userid = req.params.id
    const user = await User.findById(userid)
    res.send(user);
  });

// create 
  app.post('/user/new', express.json(),async (req, res) => {
    const userdata = req.body
   const user= await User.create(userdata)
    res.send(user);
  });

  // update 
  app.put('/user/update/:id', express.json(),async (req, res) => {
    const userid = req.params.id
    const data = req.body
   const updateuser = await User.findByIdAndUpdate (userid, data,{new:true})
    res.send(updateuser);
  });

    // delete 
    app.delete('/user/delete/:id',async (req, res) => {
        const userid =req.params.id
        const deleteduser= await User.findByIdAndDelete(userid)
    
        res.send(deleteduser);
      });
  
 async function  dbconnection(){
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crud")
    console.log("monogo db connecetd");
    
  } catch (error) {
    console.log("monogo db not connecttd");

    throw error
  }
}

await dbconnection()

app.listen(port, ()=>{
    console.log(`port at listen ${port}`)
})  



