import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../config.env") });

export default {
  host: process.env.host || "localhost",
  user: process.env.user || "postgres",
  password: process.env.password || "postgres",
  database: process.env.database || "unlisted_stocks",
  dialect: process.env.dialect || "postgres",
  port: process.env.port || "5432",
};
