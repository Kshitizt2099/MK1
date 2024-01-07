import { connecttodb } from "./config/Mongodb.js";
import express from "express";
import { UsersController } from "./controller/controller.js";
import path from "path";
const server=express();
//to getting the form data
server.use(express.urlencoded({extended:true}))
server.set('view engine',"ejs");
//destination for html files
server.set("views",path.join(path.resolve(),'View'))
const handler=new UsersController();
server.get('/',handler.home)
server.post('/',handler.addUsers);
server.listen(7007,()=>{
    
    console.log("Server is running ")
    connecttodb();})