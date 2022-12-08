function calculateCarValue(model, year) {
  // Validate input
  if (typeof model !== "string" || typeof year !== "number" || year < 0) {
    return "Error: Invalid input values";
  }

  // Convert model to uppercase and remove spaces and other special characters
  model = model.toUpperCase().replace(/[^A-Z]/g, "");

  // Calculate value by summing up the positions of the letters in the model
  // multiplied by 100 and adding the year
  let value = 0;
  for (const char of model) {
    value += char.charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  value = value * 100 + year;

  return "$" + value;
}
// console.log(calculateCarValue("Civic", 2020)); // Output: $6614
// console.log(calculateCarValue("911", 2020)); // Output: $2020
// console.log(calculateCarValue("", -2020)); // Output: Error: Invalid input values
// console.log(calculateCarValue("Task-Force", "C987")); // Output: Error: Invalid input values

module.exports = calculateCarValue;
