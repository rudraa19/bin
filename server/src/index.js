import "dotenv/config";
import express from "express";
import V1Router from "./routes/v1/index.js";
import cors from "cors";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(limiter);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("server is running"));
app.use(V1Router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
