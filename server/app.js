import express from "express";
import routes from "./routes/index";
import { Sequelize } from "sequelize";
import config from "./config/index";
import { connectModels } from "./models";

const app = express();
app.use(express.json());
routes(app);

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  logging: console.log,
});

async function createDBConnection() {
  try {
    connectModels(sequelize);
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

createDBConnection();
app.listen(5000, () => console.log("Server is running on port 3000"));
