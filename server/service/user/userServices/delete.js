import db from "../../../models/index.js";

const remove = async (id) => {
  const users = await db.user.destroy({ where: { id } });
  return users;
};

export default {
    remove,
    };