const calculateCarValue = require("../GetCarValueAPI/CarValue");
const assert = require("assert");
// const { expect } = require("chai");

// test regex
it("regex is correct in removing spaces and special characters", () => {
  let testString = "This is a Test!^%#$%";

  // assign regex to the testString variable
  let regexString = testString.toUpperCase().replace(/[^A-Z]/g, "");
  // expected output
  let expectedOutput = "THISISATEST";
  // Compare the regex string to the expected output
  if (regexString === expectedOutput) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
});

describe("Calculate Car Value", () => {
  // Test case 1
  it("should calculate the car value correctly", () => {
    // set up the data
    const input = { model: "Civic", year: 2014 };
    const expectedOutput1 = 6614;
    // run the data through the function
    const result = calculateCarValue(input);
    // expect(result).toBe(expectedOutput);
    // compare the output
    assert.strict(result, expectedOutput1);
  });
  // Test case 2
  it("negative number so should be an error", () => {
    const input2 = { model: "$money$", year: -987 };
    const expectedOutput2 = "ERROR! Invalid input values";
    const result2 = calculateCarValue(input2);
    assert.strict(result2, expectedOutput2);
  });
  // Test case 3
  it("should calculate value correctly", () => {
    const input3 = { model: "Accord", year: 2018 };
    const expectedOutput3 = 7018;
    const result3 = calculateCarValue(input3);
    assert.strict(result3, expectedOutput3);
  });
  // Test case 4
  it("year is a string and model is a number", () => {
    const input3 = { model: "0922", year: "twenty twenty" };
    const expectedOutput3 = "ERROR! Invalid input values";
    const result3 = calculateCarValue(input3);
    assert.strict(result3, expectedOutput3);
  });
  // Test case 5
  it("year is a string with special characters so should be an error", () => {
    const input3 = { model: "BEN", year: "D0V3R**" };
    const expectedOutput3 = "ERROR! Invalid input values";
    const result3 = calculateCarValue(input3);
    assert.strict(result3, expectedOutput3);
  });
});
