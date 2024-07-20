import express from "express";
const router = express.Router();
import { getTips } from "../controllers/tipController.js";

router.route("/").get(getTips);

export default router;
