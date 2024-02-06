import { Sequelize } from "sequelize";
import config from "../config/index.js";

console.log(config);

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  logging: false,
});

export default sequelize;
