import express from 'express'
import post from './post.js'
const router = express.Router()
export default function(){
 post(router)   
 return router
}