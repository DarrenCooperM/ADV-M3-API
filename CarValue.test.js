const calculateCarValue = require("./CarValue");
const assert = require("assert");
// const { expect } = require("chai");

describe("Calculate Car Value", () => {
  // Test case 1
  it("should calculate the car value correctly", () => {
    const input = { Model: "Civic", Year: 2014 };
    const expectedOutput = 6614;
    const result = calculateCarValue(input);
    // expect(result).toBe(expectedOutput);
    assert.strict(result, expectedOutput);
  });
  // Test case 2
  it("should return an error", () => {
    const input2 = { Model: "Task-Force", Year: -987 };
    const expectedOutput2 = "error";
    const result2 = calculateCarValue(input2);
    // expect(result2).to.equal(expectedOutput2);
    assert.strict(result2, expectedOutput2);
  });
  // Test case 3
  it("should calculate the car value correctly", () => {
    const input3 = { Model: "Accord", Year: 2018 };
    const expectedOutput3 = 7018;
    const result3 = calculateCarValue(input3);
    // expect(result).toBe(expectedOutput);
    assert.strict(result3, expectedOutput3);
  });
  // Test case 4
  it("negative year", () => {
    const input3 = { Model: "C200", Year: "twenty twenty" };
    const expectedOutput3 = "error";
    const result3 = calculateCarValue(input3);
    // expect(result).toBe(expectedOutput);
    assert.strict(result3, expectedOutput3);
  });
  // Test case 5
  it("should return an error", () => {
    const input3 = { Model: "MyName", Year: "Jeff" };
    const expectedOutput3 = "error";
    const result3 = calculateCarValue(input3);
    // expect(result).toBe(expectedOutput);
    assert.strict(result3, expectedOutput3);
  });
});
