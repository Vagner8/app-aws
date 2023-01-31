import express from "express";
import cors from "cors";

import { route } from './routes/test.route'

const app = express();

app.use(cors());
app.use("/test", route)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(4000, () => console.log("Server is up"));
