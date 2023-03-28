import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { main } from "./services/mongodb";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

main().catch((err) => console.log(err));

app.listen(5000);
