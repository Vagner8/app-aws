import express from "express";
import cors from "cors";
import { route } from './routes/test.routes'
import { main } from "./services/mongodb";

const app = express();

app.use(cors());
app.use(express.json())
app.use("/test", route)

main()
  .then(() => console.log("mongoose is up"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log("Server is up"));
