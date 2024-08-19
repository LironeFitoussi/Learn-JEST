import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBe(+input);
  });

  it("should yield an error if entered value is NaN", () => {
    const input = "invalid";
    const input2 = {};

    const result = () => transformToNumber(input);
    const result2 = () => transformToNumber(input2);

    expect(result).toThrow();
    expect(result2).toThrow();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers values if an array of string number values is provided", () => {
    const numberValues = ["1", "2", "3"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    // expect(cleanedNumbers).toBe([1, 2, 3]); //! This test will fail because the comparison is done by reference, not by value
    expect(cleanedNumbers).toEqual([1, 2, 3]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["1", "", "3"];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
