import { adminInfo, dashboard, loginHandler, registerHandler } from "../../controllers/adminController.js";
import authMiddleware from "../../helper/middleware/authMiddleware.js";

export default function(router){
    router.get('/admin' , adminInfo)
    router.post('/admin' , loginHandler)
    router.post('/register' , registerHandler)
    router.get('/dashboard' , authMiddleware, dashboard)
}