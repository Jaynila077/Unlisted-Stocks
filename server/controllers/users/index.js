const bcrypt = require("bcrypt");
import {
  getUserService,
  postUserService,
  putUserService,
  deleteUserService,
} from "../../service/user";

const getAllUser = async (req, res) => {
  try {
    const users = await getUserService.all();
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await getUserService.byId(req.params.id);
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json(err);
  }
};

const postUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = hashedPassword;

    const users = await postUserService.create(req.body);

    console.log("Post user");
    
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const putUser = async (req, res) => {
  try {
    const users = await putUserService.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json(err);
  }
};

const removeUser = async (req, res) => {
  try {
    const users = await deleteUserService.remove(req.params.id);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  getAllUser,
  getUserById,
  postUser,
  putUser,
  removeUser,
};
