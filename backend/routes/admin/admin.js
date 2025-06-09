import { addPostHandler, showAdminPanel, getAdminDashboard,deletePostHandler,displayAddPostPage,displayRegisterPage,displayUpdatePostPage,loginHandler, logoutHandler, registerHandler, updatePostHandler } from "../../controllers/adminController.js";
import authMiddleware from "../../helper/middleware/authMiddleware.js";

export default function(router){
    router.get('/admin', showAdminPanel )
    router.post('/admin' , loginHandler)
    router.get('/register', displayRegisterPage)
    router.post('/register' , registerHandler)
    router.get('/dashboard', authMiddleware, getAdminDashboard)
    router.get('/add-post', authMiddleware, displayAddPostPage)
    router.post('/add-post', authMiddleware, addPostHandler)
    router.get('/edit-post/:id', authMiddleware, displayUpdatePostPage)
    router.put('/edit-post/:id', authMiddleware, updatePostHandler)
    router.delete('/delete-post/:id', authMiddleware, deletePostHandler)
    router.get('/logout' , logoutHandler)
    
}