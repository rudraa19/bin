import { Router } from "express";
import contentRouter from "./content.js";

const V1Router = Router();

V1Router.use("/v1/content", contentRouter);

export default V1Router;
