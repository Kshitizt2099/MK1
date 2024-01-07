import { Controller } from "../Models/UserModel.js";
import { user } from "../Models/UserSchema.js";
import mongoose from "mongoose";

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
}