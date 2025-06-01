import { adminInfo, loginHandler } from "../../controllers/adminController.js";

export default function(router){
    router.get('/admin' , adminInfo)
    router.post('/admin' , loginHandler)
}