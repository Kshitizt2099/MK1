import mongoose from "mongoose";

export const user=new mongoose.Schema(
    {
        Name:String,
        U_id:{type:Number,unique:true},
        Email:String
    }
)