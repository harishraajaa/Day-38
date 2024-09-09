import 'dotenv/config'
import urlModel from '../Model/url.model.js'
import userModel from '../Model/user.model.js'
import { nanoid } from "nanoid"
//const validUrl = require("valid-url");
import validUrl from 'valid-url'

const recipeUserQuery = [
    {
        $lookup:{
            from:'users',
            localField:"userId",
            foreignField:"id",
            as:"UrlUser"
        }
    },
    {$unwind:"$UrlUser"},
    {$project:{originalUrl:1,shortUrlId:1,hitCount:1,userId:1,id:1,createdBy:"$UrlUser.name",email:"$UrlUser.email"}},
]

const URLQuery = [
    {
        $lookup:{
            from:'users',
            localField:"userId",
            foreignField:"id",
            as:"UrlUser"
        }
    },
    {$unwind:"$UrlUser"},
    {$project:{originalUrl:1,shortUrlId:1,hitCount:1,userId:1,id:1,createdBy:"$UrlUser.name",email:"$UrlUser.email"}},
]

const getAllUrls = async(req,res)=>{
    try {

        let urlData = await urlModel.aggregate(recipeUserQuery)
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:urlData
        })
        
    } catch (error) {
        console.log(`Error in ${req.originalUrl}`,error)
        res.status(500).send({ message: error.message || "Internal Server Error" })
    }
}


const createShortUrl = async(req,res)=>{
    try {
        //console.log(req.headers)
        const {longUrl}=req.body
        //console.log(longUrl)
        let user = await userModel.findOne({id:req.headers.userId})
        if(user)
        {
            const isUrlValid = validUrl.isUri(longUrl)
            if (!isUrlValid) {
                console.log(isUrlValid)
                return res.status(400).send({ message: "Url is not valid" });
            }
            const shortId = nanoid();
            const shortUrlLink = `${shortId}`;
            const urlCreated = await urlModel.create({
            originalUrl: longUrl,
            shortUrlId: shortUrlLink,
            userId: req.headers.userId,
            });
            res.status(201).send({
                message: "Url shortened successfully",
                type: "success",
                urlCreated,
            });
        }
        else
        {
            res.status(400).send({message:`Invalid userId`})
        }
    } catch (error) {
        console.log(`Error in ${req.originalUrl}`,error)
        res.status(500).send({ message: error.message || "Internal Server Error" })
    }
}

const getUrlById=async(req,res)=>{
    try {
        let {id}=req.params
        //console.log(id)
        let urlData =  await urlModel.aggregate(URLQuery)
        //console.log(urlData)
        const finalData=urlData.filter((e)=>e.userId==id)
        //console.log(finalData)
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:finalData
        })
        
    } catch (error) {
        console.log(`Error in ${req.originalUrl}`,error)
        res.status(500).send({ message: error.message || "Internal Server Error" })
    }
}

export default {
    createShortUrl,
    getAllUrls,
    getUrlById
}