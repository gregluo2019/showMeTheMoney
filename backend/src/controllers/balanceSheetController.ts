import { Request, Response } from "express";
import axios from "axios";

const apiHost = "http://localhost:3000";
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
      error: err.message,
    });
  }

  /*
  http
    .get(`${apiHost}${apiPath}`, (externalRes) => {
      let data = "";

      externalRes.on("data", (chunk) => {
        data += chunk;
      });

      externalRes.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          console.log("parsedData", parsedData);
          console.log("parsedData.Rows", parsedData.Rows);

          res.status(200).json(parsedData);
        } catch (error) {
          res.status(500).json({ message: "Parsing data failed" });
        }
      });
    })
    .on("error", (err) => {
      res.status(500).json({
        message: "Fetching data failed",
        error: err.message,
      });
    }); */
};
