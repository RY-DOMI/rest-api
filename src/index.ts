import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import Routes from "./routes";

import { connect } from "./database";
import { EnvConfig } from "./environment/environment.model";
import { env } from "./environment";
import { isIpAllowed } from "./middleware/ipWhitelist.middleware";

export default class App {
  public app: express.Application;
  public env: EnvConfig;

  constructor() {
    this.app = express();
    this.env = env;
  }

  public async initialize(): Promise<void> {
    console.log("Initializing app...");
    const env: string = this.env.environment || "development";

    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(env == "development" ? morgan("dev") : morgan("combined"));

    // Defining the base path
    this.app.use(
      this.env.server.base_path || "/",
      new Routes().router,
      isIpAllowed
    );
    console.log("App initialized.");
  }

  public async listen(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log("Starting server...");
      const host: string = this.env.server.host || "0.0.0.0";
      const port: number = this.env.server.port || 5000;

      this.app.listen(port, host, () =>
        console.log(
          `Server is listening on http://${host}:${port}${this.env.server.base_path}`
        )
      );
      process.on("unhandledRejection", (err) =>
        reject("Unhandled rejection: " + err)
      );
      resolve();
    });
  }

  public async connectToDatabase(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log("Connecting to database...");
      connect()
        .then(() => {
          console.log("Connection to database established.");
          resolve();
        })
        .catch((err) => reject("Connection to database failed: " + err));
    });
  }
}
