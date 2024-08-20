import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided statusCode, message, and data", () => {
    const statusCode = 404;
    const message = "Not found";
    const data = { id: 1 };

    const error = new HttpError(statusCode, message, data);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });

  it("should contain undefined if no data is provided", () => {
    // AAA Model
    // Arrange
    const statusCode = 404;
    const message = "Not found";

    // Act
    const error = new HttpError(statusCode, message);

    // Assert
    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    // AAA Model
    // Arrange
    const message = "Validation error";

    // Act
    const error = new ValidationError(message);

    // Assert
    expect(error.message).toBe(message);
  });

  it("should throw an error if no message is provided", () => {
    // AAA Model
    // Arrange
    const message = undefined;

    // Act
    const msgFn = () => new ValidationError(message);

    // Act and Assert
    expect(msgFn).toThrow(/Message is required/);
  });

  it("should throw an error if an empty message is provided", () => {
    // AAA Model
    // Arrange
    const message = " ";

    // Act
    const msgFn = () => new ValidationError(message);

    // Act and Assert
    expect(msgFn).toThrow(/Message is required/);
  });

  it("should throw an error if more than one argument is provided", () => {
    // AAA Model
    // Arrange
    const message = "Validation error";

    // Act
    const msgFn = () => new ValidationError(message, "Extra argument");

    // Act and Assert
    expect(msgFn).toThrow(/Too many arguments/);
  });
});
