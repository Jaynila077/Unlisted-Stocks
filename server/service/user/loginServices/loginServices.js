require("dotenv").config();
import db from "../../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authenticateUser = async (name, password) => {

    const user = await db.user.findOne({ where: { name } });
    if (!user) {
      throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }
    
    return user ;
  };

const createUser = async (name, password , email) => {

    const userExists = await db.user.findOne({ where: { name } });
    if (userExists) {
      throw new Error('User already exists');
    }
   const emailExists = await db.user.findOne({ where: { email } });
     if (emailExists) {
        throw new Error('Email already exists');
      }
    
      if (!name || !password || !email) {
        throw new Error('Name, password and email are required');
      }
      
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({ name, password: hashedPassword , email});
    return user;
}

  const generateToken = (userId) => {
    const secretKey =  process.env.ACCESS_TOKEN_SECRET; 
    if (!secretKey) {
      throw new Error('JWT secret key is missing');
    }  
    return jwt.sign({ userId }, secretKey);
  };
  
  export default {
    authenticateUser,
    createUser,
    generateToken,
  };