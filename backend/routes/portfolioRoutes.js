import express from "express";
const router = express.Router();
import { getPortfolio } from "../controllers/portfolioController.js";

router.route("/").get(getPortfolio);

export default router;
