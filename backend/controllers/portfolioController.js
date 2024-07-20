import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from "../models/portfolioModel.js";

const getPortfolio = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.find({});
  res.json(portfolio);
});

export { getPortfolio };
