import express from "express"
import contact from "./contact.js"
const router  = express.Router()
export default function(){
 contact(router)
  return router
}