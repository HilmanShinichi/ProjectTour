import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    transaksi: {
      type: Number,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    nominal: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
