import dotenv from 'dotenv';
dotenv.config({ path: '../config.env' });

export default {
  host: process.env.host ,
  user: process.env.user ,
  password: process.env.password, 
  database: process.env.database, 
  dialect: process.env.dialect , 
  port: process.env.port,
};
