import express from "express";
import routes from "./routes/index";

const app = express();

app.use(express.json());

routes(app);

try {
  app.listen(5001, () => {
    console.log("server is running at port 5001");
  });
} catch (err) {
  console.log(err);
}
