import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { options } from "./swagger/config.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import { TokenController } from "./controllers/token_controller.js";
import { StarbucksController } from "./controllers/starbucks_controller.js";
import { UserController } from "./controllers/user_controller.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

const tokenController = new TokenController();
const starbucksController = new StarbucksController();
const userController = new UserController();

app.post("/users", userController.signUp);

app.post("/tokens/phone", tokenController.sendToken);

app.patch("/tokens/phone", tokenController.checkToken);

app.get("/starbucks", starbucksController.lookUpStarbucks);

app.get("/users", userController.userList);

// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/myDocker01");

app.listen(3000, () => {
  console.log("프로그램을 켜는데 성공했어요.");
});
