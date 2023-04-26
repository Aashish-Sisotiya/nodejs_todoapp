import express from "express";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

export const app = express();

dotenv.config({
  path: "./data/config.env",
});

//using middleware
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
