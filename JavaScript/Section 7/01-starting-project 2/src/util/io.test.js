import { it, expect, vi } from "vitest";
import { path } from "path";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  // AAA Model
  // Arrange
  const testData = "Test";
  const testFileName = "test.txt";

  // Act
  writeData(testData, testFileName);

  // Assert
  // expect(fs.writeFile).toBeCalled();
  //? expect(fs.writeFile).toBeCalledTimes(2); // Checks how many times the function was called
  //? expect(fs.writeFile).toBeCalledWith(testFileName, testData); // Checks the arguments passed to the function
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolve to a no value if called", () => {
  // AAA Model
  // Arrange
  const testData = "Test";
  const testFileName = "test.txt";

  // Act
  const result = writeData(testData, testFileName);

  // Assert
  return expect(result).resolves.toBeUndefined();
});
