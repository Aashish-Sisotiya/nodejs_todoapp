import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((c) => console.log(`Database is connected with ${c.connection.host}`))
    .catch((err) => console.log(err));
};
