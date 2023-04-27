import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/tasks.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.js";
import cors from "cors";

export const app = express();

dotenv.config({
  path: "./data/config.env",
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONEND_URL],
    credentials: true,   // for sending cookie to the frontend req
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(errorMiddleware);
