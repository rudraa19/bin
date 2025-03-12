import "dotenv/config";
import express from "express";
import V1Router from "./routes/v1/index.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("server is running"));
app.use(V1Router);

app.listen(PORT);
