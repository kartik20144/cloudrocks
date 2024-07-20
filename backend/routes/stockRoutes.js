import express from "express";
const router = express.Router();
import { getStocks } from "../controllers/stockController.js";

router.route("/").get(getStocks);

export default router;
