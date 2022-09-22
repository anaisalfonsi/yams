import express from "express";
import session from "express-session";
import userRouter from "./routers/user.js";
import loginRouter from "./routers/login.js";
import { connect } from "./models/utils.js";

const app = express();
const port = 3002;

app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: "login",
    secret: "alklkdin987hdjd",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", userRouter, loginRouter);

app.use(express.static("public"));

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
