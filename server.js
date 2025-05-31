import dotenv from "dotenv"
dotenv.config()
 
import express from "express"
import expressLayout from "express-ejs-layouts";
import indexFile from "./backend/routes/posts/index.js"
import connectDB from "./backend/config/dbConnect.js"
const PORT = 4000 || process.env.PORT
 

connectDB();
const app = express() ; 
app.use(express.json()) // make server parsing and understanding data in json format and make it available in req.body
app.use(express.urlencoded({ extended: true })) // to make server parsing and understanding data in urlencoded format and make it available in req.body
app.use(express.static('public'));


app.use(expressLayout);
app.set('layout' , './layouts/layout') ; 
app.set('view engine' , 'ejs');


app.use("/",indexFile())
app.listen(PORT , ()=>{
    console.log(`Server are running in port ${PORT}`)
})