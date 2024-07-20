import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import stockRoutes from "./routes/stockRoutes.js";
import optionRoutes from "./routes/optionRoutes.js";
import tipRoutes from "./routes/tipRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js"

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stock", stockRoutes);
app.use("/api/option", optionRoutes);
app.use("/api/tip", tipRoutes);
app.use("/api/portfolio", portfolioRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "/frontend", "dist", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("API is running...");
    });
  }

  app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
