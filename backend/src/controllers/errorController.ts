import { Request, Response } from "express";

export const getError = (req: Request, res: Response) => {
  throw new Error("Test error");
};

export const getAsyncError = async (req: Request, res: Response, next: any) => {
  try {
    // Simulate some async operation that fails
    throw new Error("Something went wrong in async code");
  } catch (err) {
    next(err); // Pass the error to the global error handler
  }
};
