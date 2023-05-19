import  express  from "express";
import dbconnection from "./dbconnection/db.js";
import cors from 'cors'
import userRouter from "./routes/userroute.js"
import "dotenv/config"
import blogRoute from "./routes/blogroute.js";

const app=express()
const port = 4000;

app.use(cors({origin:true,credentials:true}))
app.use(express.json())

app.use(userRouter,blogRoute)

await dbconnection()

app.listen(port, ()=>{
    console.log(`port at listen ${port}`)
})  



