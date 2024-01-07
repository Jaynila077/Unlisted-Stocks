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
    const token = generateToken(user.id);
    return { user, token };
  };

  const generateToken = (userId) => {
    const secretKey =  process.env.ACCESS_TOKEN_SECRET; 
    if (!secretKey) {
      throw new Error('JWT secret key is missing');
    }  
    return jwt.sign({ userId }, secretKey);
  };
  
  export default {
    authenticateUser,
  };