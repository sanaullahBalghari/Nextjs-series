import mongoose from "mongoose";


export async function connect(){

    try{

        await mongoose.connect(process.env.MONGODB_URI!)
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("database connected successfully");
        })

        connection.on('error',(err)=>{
            console.log("Mongodb connection error"  + err);
            process.exit();
        })
    }catch(error){

        console.log("something went wrong while connecting to the database");
        console.log(error);
    }
}
