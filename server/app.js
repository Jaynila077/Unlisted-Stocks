import express from "express";
import routes from "./routes/index";
import { Sequelize } from "sequelize";
import config from "./config/index";

const app = express();
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  logging: console.log,
});
app.use(express.json());
routes(app);
async function createDBConnection() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
createDBConnection();
app.listen(5000, () => console.log("Server is running on port 3000"));
