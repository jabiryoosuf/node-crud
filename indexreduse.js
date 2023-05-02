import  express  from "express";
import dbconnection from "./dbconnection/db.js";
import userRouter from "./routes/userroute.js"

const app=express()
const port =4000;

app.use(express.json())

app.use(userRouter)

await dbconnection()

app.listen(port, ()=>{
    console.log(`port at listen ${port}`)
})  



