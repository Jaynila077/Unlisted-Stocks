import db from "../../../models/index.js";
import bcrypt from "bcrypt";

const authenticateUser = async (name, password) => {

    const user = await db.user.findOne({ where: { name } });
    if (!user) {
      throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }
    return user;
  };
  
  export default {
    authenticateUser,
  };