function calculateCarValue(model, year) {
  // checking to see if the input is valid.
  if (!(typeof model === "string" && typeof year === "number" && year > 0)) {
    throw error;
  }

  // Convert model to uppercase and remove spaces and other special characters
  model = model.toUpperCase().replace(/[^A-Z]/g, "");

  // Calculate value by summing up the positions of the letters in the model
  // multiplied by 100 and adding the year
  let value = 0;
  for (const char of model) {
    value += char.charCodeAt(0) - "A".charCodeAt(0) + 1; // ASCII value - American Standard Code for Information Interchange
  }
  value = value * 100 + year;

  return "$" + value;
}
module.exports = calculateCarValue;
