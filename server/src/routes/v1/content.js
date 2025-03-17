import { Router } from "express";
import { getAllData, getData, storeData } from "../../controller/index.js";
import rateLimit from "express-rate-limit";

const postLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again after 10 minutes",
});

const contentRouter = new Router();

contentRouter.post("/", postLimiter, storeData);
contentRouter.get("/", getData);
contentRouter.get("/all", getAllData);

export default contentRouter;
