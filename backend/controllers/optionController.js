import asyncHandler from "../middleware/asyncHandler.js";
import Option from "../models/optionModel.js";

const getOptions = asyncHandler(async (req, res) => {
  const options = await Option.find({});
  res.json(options);
});

export { getOptions };
