import express from "express";
import routes from "./routes/index";
import { Sequelize } from "sequelize";
import config from "./config/index";
import db from "./models/index";
import cors from "cors";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
routes(app);

async function createDBConnection() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

createDBConnection();
app.listen(5000, () => console.log("Server is running on port 5000"));
