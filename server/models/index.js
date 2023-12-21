import user from "./user/index.js";
import { DataTypes } from "sequelize";

export function connectModels(sequelize) {
  user(sequelize, DataTypes);
}
