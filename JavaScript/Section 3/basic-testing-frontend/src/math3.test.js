// import the "it" function from the vitest library
import { expect, it } from "vitest";
// "it" and "test" are the same function in vitest library that is used to define a test case

// import the function to be tested
import { add } from "./math.js";

it("should throw an error if provided withmultiple arguments instead of an array", () => {
  // 1. Arrange
  const num1 = 1;
  const num2 = 2;

  // 2. Act
  const resultFn = () => {
    add(num1, num2);
  };

  // 3. Assert
  expect(resultFn).toThrow(/is not iterable/);
});
