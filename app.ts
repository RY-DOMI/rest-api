import pino from "pino";
import * as pjson from "./package.json";
import App from "./src";

const logger = pino();
console.log = logger.info.bind(logger);
console.error = logger.error.bind(logger);

console.log("test");

console.log(
  `\n\n\n  _____   _____         _____ _    _  _____\n |   __| |     | |        |    \\  /  |     |\n |____\\| |_____| |_____ __|__   \\/   |_____|\t [Version=${
    pjson.version
  }]\n  + Copyright (c) ${new Date().getFullYear()} ${
    pjson.author
  }\n  + All rights reserved.\n\n`
);

const app: App = new App();
app
  .initialize()
  .then(() =>
    app.connectToDatabase().catch((err) => {
      console.error(err);
      process.exit(1102);
    })
  )
  .then(() =>
    app.listen().catch((err) => {
      console.error(err);
      process.exit(1102);
    })
  )
  .catch((err) => {
    console.error("Could not start the app: ", err);
  });
