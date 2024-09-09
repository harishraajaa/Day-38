import express from "express"
import recipesrouter from "./recipes.router.js"
import userrouter from "./users.router.js"
import urlrouter from './url.router.js'

 
const router=express.Router()
router.use('/recipes',recipesrouter)
router.use('/users',userrouter)
router.use('/urls',urlrouter)
router.get('*',(request,response)=>response.send(`<div style='text-align:center'><h1>404 Endpoint Not found</h1></div`))

export default router