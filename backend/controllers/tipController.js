import asyncHandler from "../middleware/asyncHandler.js";
import Tip from "../models/TipModel.js";

const getTips = asyncHandler(async (req, res) => {
  const tips = await Tip.find({});
  res.json(tips);
});

export { getTips };
