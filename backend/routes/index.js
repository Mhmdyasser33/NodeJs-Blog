import express from "express"
const router = express.Router()


router.get("/" , (req , res)=>{
    const locals = {
        title: "NodeJS Blog",
        description: "Simple Blog created with NodeJS, Express & MongoDB."
    }
    res.render("index", {locals})
})

export default router;