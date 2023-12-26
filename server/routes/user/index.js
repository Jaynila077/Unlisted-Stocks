import express from "express";
import userController  from "../../controllers/users/index.js";
import loginController from "../../controllers/users/login/index.js";

const User = express.Router();

User.get("/", userController.getAllUser);
User.get("/:id", userController.getUserById);
User.post("/", userController.postUser);
User.put("/:id", userController.putUser);
User.delete("/:id", userController.removeUser);

User.post("/login", loginController.loginUser);

export default User;
