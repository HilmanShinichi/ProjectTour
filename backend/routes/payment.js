import express from "express";
import {
    createPayment,
  deletePayment,
  getAllPayment,
  getSinglePayment,
  updatePayment,
} from "../controllers/paymentControllers.js";
const router = express.Router();

// panggil verifyPayment
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//Create Payment
router.post("/", verifyAdmin, createPayment);

// update Payment
router.put("/:id", verifyUser, updatePayment);

// delete Payment
router.delete("/:id", verifyUser, deletePayment);

// getSingle Payment
router.get("/:id", verifyUser, getSinglePayment);

// getAll Payments
router.get("/", verifyAdmin, getAllPayment);

export default router;
