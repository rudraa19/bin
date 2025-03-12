import "dotenv/config";
import express from "express";
import V1Router from "./routes/v1/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("server is running"));
app.use(V1Router);

app.listen(PORT);
