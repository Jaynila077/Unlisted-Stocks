import db from "../../../models/index.js";

const create = async (data) => {
  const users = await db.user.create(data);
  return users;
};

export default {
  create,
};
