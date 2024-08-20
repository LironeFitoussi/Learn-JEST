import { it, expect } from "vitest";
import { ValidationError } from "./errors";
import { validateNotEmpty } from "./validation";

it("should throw an error if an empty message is provided", () => {
  // AAA Model
  // Arrange
  const message = "";

  // Act
  const msgFn = () => new ValidationError(message);

  // Assert
  expect(msgFn).toThrow(/Message is required/);
});

it("should throw an error if an blank message is provided", () => {
  // AAA Model
  // Arrange
  const message = "  ";

  // Act
  const msgFn = () => validateNotEmpty(message);

  // Assert
  expect(msgFn).toThrow(/Message is required/);
});

it("should throw an error with the provided erro message", () => {
  // AAA Model
  // Arrange
  const message = "Validation error";
  const testInput = "";
  // Act
  const msgFn = () => validateNotEmpty(testInput, message);

  // Assert
  expect(msgFn).toThrow(message);
});
