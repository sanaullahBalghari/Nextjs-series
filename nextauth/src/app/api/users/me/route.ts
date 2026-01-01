export const runtime = "nodejs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken ";
connect();

export async function GET(request: NextRequest) {

    //extract data from token 
    const userId=await getDataFromToken(request);
    const user=await User.findById({_id:userId}).select("-password")

    if(!user){
        return NextResponse.json({error:"Token is invalid "})
    }

    return NextResponse.json({message:"User found", data:user})
}