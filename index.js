const express = require("express");
const morgan = require("morgan");
const request = require("request");
const cors = require("cors");

// Create Express Server
const app = express();

// Configuration
const PORT = process.env.PORT || 4000;
const HOST = "localhost";
const API_SERVICE_URL = "https://api.up42.com/marketplace";

// Logging
app.use(morgan("dev"));

// CORS
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("hello world!");
});

// Info GET endpoint
app.get("/blocks", (req, res, next) => {
  const url = API_SERVICE_URL + req.url;
  req.pipe(request(url)).pipe(res);
});

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
