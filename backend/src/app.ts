import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import globalErrorHandler from "./controllers/errorController";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(globalErrorHandler);
app.use("/api", routes);

export default app;
