import mongoose from './index.model.js'
import { v4 as genuuid } from 'uuid';

const UrlSchema = new mongoose.Schema({
    id:{
        type:String,
        default:function (){
            return genuuid()
        }
        },
    originalUrl: {
          type: String,
          required: true,
        },
    shortUrlId: {
          type: String,
          required: true,
          unique: true,
        },                
    hitCount: {
          type: Number,
          default: 0,
        },
    userId:{
        type:String,
        required:[true,"userId is required"]
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

},{
    collection:'urls',
    versionKey:false
})

export default mongoose.model('urls',UrlSchema)