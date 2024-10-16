import { Request, Response } from "express";
import axios from "axios";

const apiHost = "http://host.docker.internal:3000"; // "http://127.0.0.1:3000";
const apiPath = "/api.xro/2.0/Reports/BalanceSheet";
export const balanceSheetUrl = `${apiHost}${apiPath}`;

export const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const externalRes = await axios.get(balanceSheetUrl);
    const data = externalRes.data;
    console.log("data", data);

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({
      message: "Fetching data failed",
    });
  }
};
