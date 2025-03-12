import { Router } from "express";
import { getData, storeData } from "../../controller/index.js";

const contentRouter = new Router();

contentRouter.post("/", storeData);
contentRouter.get("/", getData);

export default contentRouter;
