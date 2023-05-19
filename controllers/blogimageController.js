import { blogImageCreate } from "../services/blogImageService.js";



  export async function createBlogImage (req, res, next){
    try {
      const blogId = req.query.blogId;
    //   const userId = req.query.userId;
      const files = req.files;
      if (!files) {
        return res.status(400).json({ message: 'No files were uploaded.' });
      }
      const createProductImageData =  await blogImageCreate(blogId, files);

      res.status(200).json({ message: 'image uploaded successfully' });
    } catch (error) {
      next(error);
    }
  };
