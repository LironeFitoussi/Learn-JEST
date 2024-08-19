// import the "it" function from the vitest library
import { expect, it } from "vitest";
// "it" and "test" are the same function in vitest library that is used to define a test case

// import the function to be tested
import { add } from "./math.js";

// First test case
it("should summarize all number values in an array", () => {
  // The test case function contains the test logic

  // 1. Arrange - set up the test data
  const numbers = [1, 2, 3, 4, 5];
  const expected = numbers.reduce((acc, curr) => acc + curr, 0);

  // 2. Act - execute the function to be tested
  const result = add(numbers);

  // "expect" is a function that is used to make assertions "toBe" is a matcher function that checks if the result is equal to the expected value
  // In this case, the expected value is 15 from the sum of the numbers in the array [1, 2, 3, 4, 5] (1 + 2 + 3 + 4 + 5 = 15)

  // 3. Assert - check if the result is equal to the expected value
  expect(result).toBe(expected);
});

// Second test case
it("sould yield NaN if at least one of the values is not a number", () => {
  // 1. Arrange
  const numbers = [1, 2, 3, "invalid", 5];

  // 2. Act
  const result = add(numbers);

  // 3. Assert
  expect(result).toBeNaN();
});

// Third test case
it("should yield a correct sum if an array of numeric strings is passed", () => {
  // 1. Arrange
  const numbers = ["1", "2", "3", "6"];
  const expected = numbers.reduce((acc, curr) => acc + Number(curr), 0);

  // 2. Act
  const result = add(numbers);
  // 3. Assert
  //   expect(result).toBeTypeOf("number");
  expect(result).toBe(expected);
});

// Fourth test case
it("should yield 0 if an empty array is passed", () => {
  // 1. Arrange
  const numbers = [];
  const expected = numbers.reduce((acc, curr) => acc + Number(curr), 0);

  // 2. Act
  const result = add(numbers);

  // 3. Assert
  expect(result).toBe(expected);
});

// Fifth test case
// it("should throw and error if no value is passed into the function", () => {
//   try {
//     const result = add();
//   } catch (error) {
//     expect(error).toBeDefined();
//   }
// });

it("should throw and error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

//! NOTES:
/**
 *
 * This is the test case description
 * The first argument is the description of the test case
 * The second argument is the test case function
 */

// Runing the test with "watch" mode: npx vitest --watch
// like while running a react app with "npm start" or "yarn start" in watch mode to see the changes in the code
