import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    // img: {
    //   type: [String],
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Product", ProductSchema);
