import express from "express";
import { getBalanceSheet } from "./controllers/balanceSheetController";

const router = express.Router();

router.route("/balanceSheet").get(getBalanceSheet);

export default router;
