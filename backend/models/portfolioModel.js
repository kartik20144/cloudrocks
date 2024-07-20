import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    month: {
      type: String,
  
    },
    value: {
      type: Number,
     
    },
    predictedValue: {
        type: Number,
       
      },
    label: {
        type: Number,
    
      },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
