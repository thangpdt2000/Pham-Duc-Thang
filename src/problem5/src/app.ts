import express from "express";
import { Request, Response, NextFunction } from "express";
const app = express();
import helmet from "helmet";
import bodyParser from "body-parser";
import connectorDb from "./Helper/Dbconnector";
import * as dotenv from "dotenv";
import PostRoute from "./Routes/PostRoute";
import UserRoute from "./Routes/UserRoute";
import morgan from "morgan";

dotenv.config();

app.use(helmet());
app.use(bodyParser.json());
//morgan used for logging
// app.use(morgan("dev"));
app.use(morgan<Request, Response>("dev"));
import { db } from "./config";
import { ApiError, ErrorType, InternalError } from "./Helper/ApiError";

// Build the connection string
const dbURI = `mongodb://${db.user}:${encodeURIComponent(db.password)}@${
  db.host
}:${db.port}/${db.name}`;
console.log("dbURI::: ", dbURI);
const server_port = process.env.SERVER_PORT ?? "";

connectorDb(dbURI);

//user route
app.use("/user", UserRoute);
//post route
app.use("/post", PostRoute);

//404 response
app.use((error: any, res: Response, next: NextFunction) => {
  try {
    res.status(404).send("Resource not found");
  } catch (error) {
    next(error);
  }
});

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
    if (err.type === ErrorType.INTERNAL)
      console.error(
        `500 - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
  } else {
    console.error(
      `500 - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
    console.error(err);
    ApiError.handle(new InternalError(), res);
  }
});
const port = server_port || 5000;
app.listen(port, () => {
  console.log(`Application started on ${port}...`);
});

export default app;
