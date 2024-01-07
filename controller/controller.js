import { Controller } from "../Models/UserModel.js";
import { user } from "../Models/UserSchema.js";
import mongoose from "mongoose";
const UserModel=mongoose.model("ShUsers",user);
export class UsersController{
    async home(req,res)
    {
   
       res.render('Home')
       
        
    }
    //For rending the Add Habit page
    addUsers(req,res)
    {
        Controller.signUp(req.body);
        
        
        res.render('Home')            
    }

    async AllUsers(req,res)
    {
        let data=await UserModel.find({});
        console.log(data)
        return res.render('AllNames',{data})

    }
}
