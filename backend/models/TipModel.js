import mongoose from "mongoose";

const tipSchema = new mongoose.Schema(
  {
    tip: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tip = mongoose.model("Tip", tipSchema);

export default Tip;
