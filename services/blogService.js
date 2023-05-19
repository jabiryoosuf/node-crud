import blog from "../models/blogmodel.js";


export  async function findBlog(){
    const blogs= await blog.find()
    return blogs
  }

  export  async function findSingleBlog(blogid){
    const blogs= await blog.findById(blogid)
    return blogs
  }  


  export async function createBlog(usedata){
    const blogs= await blog.create(usedata)
    return blogs
  }


  export async function updateBlog(blogid,usedata){
    const blogs= await blog.findByIdAndUpdate(blogid,usedata,{new:true})
    return blogs
  }

  export async function deleteBlog(blogid){
    const blogs= await blog.findByIdAndDelete(blogid)
    return blogs
  }