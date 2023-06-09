import  Express  from "express";
// import {userCreate, userDelete, userLogin, userSingleGet, userUpdate, usersget} from "../controllers/userController.js";
import {blogCreate, blogDelete, blogSingleGet, blogUpdate, blogget} from "../controllers/blogController.js";
import multer from "multer";
const upload = multer({storage : multer.diskStorage({})}); 
const blogRoute=Express()

blogRoute.get('/blog',blogget)
blogRoute.get('/blog/:id',blogSingleGet)
blogRoute.post('/blog/create',upload.single('image') ,blogCreate)
blogRoute.put('/blog/update/:id',blogUpdate)
blogRoute.delete('/blog/delete/:id',blogDelete)



export default blogRoute 