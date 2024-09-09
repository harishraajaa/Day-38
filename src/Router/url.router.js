import express from "express"
import urlController from '../Controller/url.controller.js'
import VerifyAuth from '../Middleware/verifyAuth.js'

const urlsrouter=express.Router()

urlsrouter.get('/',(request,response)=>response.send({message:"URL Data Fetched"}))


urlsrouter.get('/getAllUrls',VerifyAuth,urlController.getAllUrls)
urlsrouter.get('/getUrlById/:id',VerifyAuth,urlController.getUrlById)
urlsrouter.post('/createShortUrl',VerifyAuth,urlController.createShortUrl)

export default urlsrouter
