import express from "express";
import { Request, Response } from "express";
import http from "http";

const router = express.Router();
const apiHost = "http://localhost:3000";
const apiPath = "/api.xro/2.0/Reports/BalanceSheet";

router.get("/balance", (req: Request, res: Response) => {
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
    });
});

export default router;
