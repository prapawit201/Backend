import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logging from "./logging";
import config from "./config";

const NAMESPACE = "Server";
const router = express();

//log the request
router.use((req, res , next) => {
  logging.info(
    "NAMESPACE",
    `METHOD - [${req.method}], URL - [${req.url}] , IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      "NAMESPACE",
      `METHOD - [${req.method}], URL - [${req.url}] , IP - [${req.socket.remoteAddress}] , STATUS - [${req.statusCode}]`
    );
  });

  next();

});

//parse request
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//rule of API
router.use((req, res , next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }

  next();

});

//route
router.use((req, res, next) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message,
  });



});

//create server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `server running on ${config.server.hostname}:${config.server.port}`
  );
});
