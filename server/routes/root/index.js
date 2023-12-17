import express from "express";
import root_controller from "../../controllers/root/index";


const root=express.Router()

root.get("/",root_controller.getRoot)
 
export default root;