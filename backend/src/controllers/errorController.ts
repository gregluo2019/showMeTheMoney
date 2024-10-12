import { Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  console.error("ERROR 💥", err);
  return res.status(err.statusCode).json({
    status: err.status,
    message: "Error: " + err.message,
  });
};

export default globalErrorHandler;
