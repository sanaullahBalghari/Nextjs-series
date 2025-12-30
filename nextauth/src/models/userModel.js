import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';
import { type } from 'os';

const userSchema =new mongoose.Schema({

    username:{
        type :string,
        required: [true,"please provide username"],
        unique:true,
    },
    email:{
        type :string,
        required: [true,"please provide email"],
        unique:true,
    },
    password:{
        type :string,
        required: [true,"please provide password"],
        
    },

    isverified:{
        type:Boolean,
        default :false,
    },
    isAdmin:{
        type :Boolean,
        default:false,
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User;