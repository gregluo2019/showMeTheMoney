import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.use(globalErrorHandler);

export default app;
