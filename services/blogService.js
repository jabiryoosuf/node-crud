import blog from "../models/blogmodel.js";
import cloudinary from "../utils/cloudinary.utils.js";


export  async function findBlog(){
    const blogs= await blog.find()
    return blogs
  }

  export  async function findSingleBlog(blogid){
    const blogs= await blog.findById(blogid)
    return blogs
  }  


  export async function createBlog(blogdata,file){

        const public_id = `blog/${file.filename}`;
        const result = await cloudinary.uploader.upload(file.path, { public_id });

        let image = {
          public_id :result.public_id,
          url: result.secure_url,
        }
      blogdata.image = image
    const blogs= await blog.create(blogdata)
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