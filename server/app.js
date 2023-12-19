import express from "express";
import routes from "./routes/index";
import { Sequelize } from "sequelize";
import config from "./config";
const sequelize = new Sequelize(config);

const app = express();

app.use(express.json());

routes(app);

try {
  sequelize
    .sync({ force: true }) // Use force: true only during development to drop tables on every sync
    .then(() => {
      console.log("Database synchronized");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });

  app.listen(5000, () => {
    console.log("server is running at port 5000");
  });
} catch (err) {
  console.log(err);
}
