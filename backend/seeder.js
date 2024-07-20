import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import portfolio from "./data/portfolio.js";
import tips from "./data/tips.js";
import stocks from "./data/stocks.js";
import options from "./data/options.js";
import Stock from "./models/stockModel.js";
import Option from "./models/optionModel.js";
import Tip from "./models/TipModel.js";
import Portfolio from "./models/portfolioModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Stock.deleteMany();
    await Option.deleteMany();
    await Tip.deleteMany();
    await Portfolio.deleteMany();

    const samplestocks = stocks.map((stock) => {
      return { ...stock };
    });
    const sampleoptions = options.map((option) => {
      return { ...option };
    });
    const sampletips = tips.map((tip) => {
      return { ...tip };
    });
    const samplePortfolio = portfolio.map((portfolio) => {
      return { ...portfolio };
    });

    await Stock.insertMany(samplestocks);
    await Option.insertMany(sampleoptions);
    await Tip.insertMany(sampletips);
    await Portfolio.insertMany(samplePortfolio);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Stock.deleteMany();
    await Option.deleteMany();
    await Tip.deleteMany();
    await Portfolio.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
