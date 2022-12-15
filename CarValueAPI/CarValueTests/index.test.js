const request = require("supertest")("https://jsonplaceholder.typicode.com");
const assert = require("assert"); // assert is used to perform basic value comparisons in tests and other contexts, and to throw an error if the comparison fails.

describe("POST /car-value", () => {
  it("should calculate the value of a car", async () => {
    // async - write non-blocking code that can be executed in parallel with other code, which can improve performance and make your code more efficient.
    // Set up the request data
    const model = "Civic";
    const year = 2020;
    const data = { model, year };

    // Send the request and get the response
    return request
      .post("/car-value")
      .send(data)
      .then((response) => {
        // Check the response status code
        assert.strict(response.status, 200);

        // Check the response data
        assert.strict(response.body, {
          value: {
            carValue: "$6620",
          },
        });
      });
  });
});
