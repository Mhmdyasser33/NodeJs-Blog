import express from "express"
import about from "./about.js"
const router = express.Router()
export default function () {
    about(router)
    return router
}