import db from "../../../models/index.js";


const update = async (id, data) => {
  const users = await db.user.update(data, { where: { id } });
  return users;
};

export default {
  update,
};
