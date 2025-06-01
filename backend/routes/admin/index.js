import express from "express"
import admin from "./admin.js";
const router = express.Router() ;
export default function(){
    admin(router)
    return router
}