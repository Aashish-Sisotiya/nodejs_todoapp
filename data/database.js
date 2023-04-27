import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log(err));
};
