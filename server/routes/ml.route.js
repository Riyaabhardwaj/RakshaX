import express from "express";
import { predictDisasters } from "../controllers/ml.controller.js";


const Router = express.Router()

Router.route("/predict").post(predictDisasters)

export default Router