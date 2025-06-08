import { aboutItem } from "../../controllers/aboutController.js";

export default function(router){
    router.get('/about',aboutItem)
}