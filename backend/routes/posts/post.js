import {getPostById,renderHomePage,searchPosts } from "../../controllers/postController.js"
export default function(router){
   router.get('/' , renderHomePage)
   router.get('/post/:id' , getPostById)
   router.post('/search' , searchPosts)
}