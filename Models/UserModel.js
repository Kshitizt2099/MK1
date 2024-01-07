import mongoose from "mongoose";
import { user } from "./UserSchema.js";



const UserModel=mongoose.model("ShUsers",user);
export class Controller{
    static async signUp(user){
        console.log(user)
        try{
            // create instance of model.
            const newUser = new UserModel(user);
            await newUser.save();
           
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async signIn(email, password){
        try{
           return await UserModel.findOne({email, password});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async findByEmail(email) {
        try{
        return await UserModel.findOne({email});
      }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
      }
      }

}