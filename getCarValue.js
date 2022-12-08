const calculateCarValue = require("./CarValue"); // import car value function

function carValue(req, res) {
  let model; // car name or model
  let year; // car year in number only
  let carValue; // car value
  ({ model, year } = req.body); // Assigning values to req.body and also destructuring to extract model & year from the req.body

  carValue = calculateCarValue(model, year); // calculate the value of the car based on its model and year
  res.json({ carValue }); // sends the car value back in the response in json format
}

module.exports = carValue;

// The carValue function takes in an object containing information about a car,
// calculates the value of the car, and sends the car value back in the response.
