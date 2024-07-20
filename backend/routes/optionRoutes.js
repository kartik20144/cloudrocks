import express from "express";
const router = express.Router();
import { getOptions } from "../controllers/optionController.js";

router.route("/").get(getOptions);

export default router;
