import { app } from "./app.js";

import { connectDb } from "./data/database.js";

connectDb();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is working}`);
});
