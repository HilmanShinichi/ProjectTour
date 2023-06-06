import express from "express";
import { notfound } from "../controllers/notoundController.js";
const router = express.Router();


router.get("/", notfound);

export default router;