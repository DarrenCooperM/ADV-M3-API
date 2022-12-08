const request = require("supertest")("https://jsonplaceholder.typicode.com");
const assert = require("assert");

describe("POST /car-value", () => {
  it("should calculate the value of a car", async () => {
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
