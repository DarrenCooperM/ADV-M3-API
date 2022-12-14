"use strict";
const carValue = require("./GetCarValueAPI/getCarValue"); // import car value function
const express = require("express"); // importing express
const server = express(); // assigning express to a variable
const env = require("dotenv");
server.use(express.json()); // allows the backend to understand json data ---- configs the data
env.config(); // syntax to import env data

// get car value endpoint
server.post("/getcarvalue", carValue);

server.get("/getcarvalue", (req, res) => {
  res.send("Deployment Success");
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
