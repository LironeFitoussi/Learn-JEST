import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("should return a number when a string is passed", () => {
  // 1. Arrange
  const value = "1";

  // 2. Act
  const result = transformToNumber(value);

  // 3. Assert
  expect(result).toBe(1);
  expect(result).toBeTypeOf("number");
});

it("should throw an error if non valid number is passed", () => {
  // 1. Arrange
  const value = "one";
  const value2 = {};

  // 2. Act
  const calcFn = () => {
    transformToNumber(value);
  };
  const calcFn2 = () => {
    transformToNumber(value2);
  };

  // 3. Assert
  expect(calcFn).toThrow();
  expect(calcFn).toThrow();
});
