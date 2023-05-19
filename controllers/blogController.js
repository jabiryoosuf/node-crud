import { findBlog, findSingleBlog, createBlog, updateBlog, deleteBlog } from "../services/blogService.js";

//all view
export async function  blogget(req,res){
    try {
        const blogs = await findBlog()
        res.send(blogs);
    } catch (error) {
        console.log(error);
        throw error
    }
  } 

//singleview

  export async function  blogSingleGet(req,res){
    try {
        const blogid = req.params.id
        const blogs = await findSingleBlog(blogid)
        res.send(blogs);
    } catch (error) {
        console.log(error);
        throw error
    }
  } 

//create
  
 export  async function  blogCreate(req,res){
    try {
        const usedata=req.body
        const blog=await createBlog(usedata)
        res.send(blog)
    } catch (error) {
        console.log(error);
        throw error
    }
  }

  //update

  export  async function  blogUpdate(req,res){
    try {
      const blogid = req.params.id
       const blogdata=req.body
        const blog=await updateBlog(blogid,blogdata)
        res.send(blog)
    } catch (error) {
        console.log(error);
        throw error
    }
  }



  //delete
  export  async function  blogDelete(req,res){
    try {
      const blogid = req.params.id
        const blog=await deleteBlog(blogid)
        res.send(blog)
    } catch (error) {
        console.log(error);
        throw error
    }
  }
