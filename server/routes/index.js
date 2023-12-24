import root from "./root/index";
import user from "./user/index";

const routes = (app) => {
  app.use("/", root);
  app.use("/user", user);
};

export default routes;


