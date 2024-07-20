import asyncHandler from "../middleware/asyncHandler.js";
import Stock from "../models/stockModel.js";

const getStocks = asyncHandler(async (req, res) => {
  const stocks = await Stock.find({});
  res.json(stocks);
});

export { getStocks };
