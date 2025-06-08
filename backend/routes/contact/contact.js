import { ContactItem } from "../../controllers/contactController.js";

export default function(router){
    router.get('/contact', ContactItem)
}