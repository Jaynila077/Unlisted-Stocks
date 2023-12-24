import db from "../../../models/index.js";

const all = async () => {
  const users = await db.user.findAll();
  return users;
};

const byId = async (id) => {
  const users = await db.user.findAll({ where: { id } });
  return users;
};

export default {
  all,
  byId,
};
