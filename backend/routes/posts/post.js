import { addPostHandler, displayAddPostPage } from "../../controllers/adminController.js";
import {getIndex, getPostById,searchPosts } from "../../controllers/postController.js"
import authMiddleware from "../../helper/middleware/authMiddleware.js";
export default function(router){
   router.get('/' , getIndex)
   router.get('/post/:id' , getPostById)
   router.post('/search' , searchPosts)
   router.get('/add-post' , authMiddleware,displayAddPostPage)
   router.post('/add-post' , authMiddleware , addPostHandler)
}