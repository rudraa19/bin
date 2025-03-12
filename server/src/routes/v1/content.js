import { Router } from "express";
import { getAllData, getData, storeData } from "../../controller/index.js";

const contentRouter = new Router();

contentRouter.post("/", storeData);
contentRouter.get("/", getData);
contentRouter.get("/all", getAllData);

export default contentRouter;
