import express from "express";
import { getBalanceSheet } from "./controllers/balanceSheetController";
import { getError } from "./controllers/errorController";
import { getAsyncError } from "./controllers/errorController";

const router = express.Router();

router.route("/balanceSheet").get(getBalanceSheet);
router.route("/error").get(getError);
router.route("/async-error").get(getAsyncError);

export default router;
