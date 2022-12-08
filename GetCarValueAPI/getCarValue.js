const calculateCarValue = require("./CarValue"); // import car value function

function carValue(req, res) {
  let model;
  let year;
  let carValue;
  ({ model, year } = req.body); // Assigning values to req.body and also destructuring to extract model & year from the req.body

  //   carValue = calculateCarValue(model, year); // calculate the value of the car based on its model and year
  //   res.json({ carValue }); // sends the car value back in the response in json format
  try {
    carValue = calculateCarValue(model, year);
    res.json({ carValue });
  } catch (error) {
    res.status(500).json({ error: "Error" }); // 500 = internal server error
  }
}

module.exports = carValue;
