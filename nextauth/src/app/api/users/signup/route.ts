import { connect } from "@/dbConfig/dbConfig";

import User from "@/models/userModel";
import { error } from "console";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request :NextRequest){

   try {
    

    const reqBody=await request.json();

    const {username, email , password}=reqBody;

    console.log(reqBody);

    const user=await User.findOne({email:email});

    if(user){
        return NextResponse.json({error:"user is already exist "}, {status:400} )
    }

    const salt =await bcryptjs.genSalt(10);

    const hashedPassword =await bcryptjs.hash(password, salt)

    const newUser =new User({

        username:username,
        email :email,
        password:hashedPassword
    })

    const savedUser =await newUser.save();
    console.log("saved user", savedUser);


    // send verifaction emai here 
    await sendEmail({email, emailType:"VERIFY", userId:savedUser._id})

    return NextResponse.json({message:"user registered successfully", success:true, savedUser}, {status:200})


   } catch (error:any) {
     return NextResponse.json({error:error.message},
         {status:500}
     )
   }
}