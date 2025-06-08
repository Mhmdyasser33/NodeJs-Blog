import {getIndex, getPostById,searchPosts } from "../../controllers/postController.js"
export default function(router){
   router.get('/' , getIndex)
   router.get('/post/:id' , getPostById)
   router.post('/search' , searchPosts)
   
}