import { Request, Response } from "express";
import axios from "axios";

const apiHost = "http://localhost:3000";
const apiPath = "/api.xro/2.0/Reports/BalanceSheet";
export const balanceSheetUrl = `${apiHost}${apiPath}`;

export const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const externalRes = await axios.get(balanceSheetUrl, { timeout: 5000 });
    const data = externalRes.data;
    console.log("data", data);

    res.status(200).json(data);
  } catch (err: any) {
    //console.log("err", err);

    res.status(500).json({
      message: "Fetching data failed",
      error: err.message || err.cause,
    });
  }
};
