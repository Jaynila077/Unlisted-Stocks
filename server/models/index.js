import user from "./user/index.js";
import sequelize from "../initializer/db.js";
import { DataTypes } from "sequelize";

const db={};

function connectModels() {
  db.user=user(sequelize, DataTypes);
}

connectModels();
db.sequelize = sequelize;

export default db;