import _ from 'lodash';
import { HttpException } from '../exceptions/exceptions.js';
import cloudinary from '../utils/cloudinary.utils.js';
import blog from "../models/blogmodel.js";
import User from "../models/usermodels.js";

 

  export async function blogImageCreate(blogId, files, userId) {
    
    if (blogId) {
      const Blog = await blog.findById(blogId);
      if(!Blog) throw new HttpException(404, "blog not found")
      const images = [];
  
      for (const file of files) {
        const public_id = `blog/${file.filename}`;
        const result = await cloudinary.uploader.upload(file.path, { public_id });
        images.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      Blog.images.push(...images);
      const blogImage = await Blog.save({ validateBeforeSave: false });
      return blogImage;
    }
  
    if(blogId){
      const blog = await User.findById(blogId);
      if(!blog) throw new HttpException(404, "User not found")
      const images = [];
  
      for (const file of files) {
        const public_id = `user/${file.filename}`;
        const result = await cloudinary.uploader.upload(file.path, { public_id });
        images.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      blog.photos.push(...images);
      const userProfile = await User.save({ validateBeforeSave: false })
      return userProfile;
    }
    return ({message:"image upload failed"})
  }

 