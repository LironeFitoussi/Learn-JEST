import { validateStringNotEmpty, validateNumber } from "./validation";
import { expect, describe, it } from "vitest";

describe("validateStringNotEmpty", () => {
  it("should throw an error if the string is empty", () => {
    // Arrange
    const value = "";

    // Act
    const act = () => validateStringNotEmpty(value);

    // Assert
    expect(act).toThrow("Invalid input - must not be empty.");
  });

  it("should throw an error if the string contains only spaces", () => {
    // Arrange
    const value = "    ";

    // Act
    const act = () => validateStringNotEmpty(value);

    // Assert
    expect(act).toThrow("Invalid input - must not be empty.");
  });

  it("should throw an error if the string contains a newline character only", () => {
    // Arrange
    const value = "\n";

    // Act
    const act = () => validateStringNotEmpty(value);

    // Assert
    expect(act).toThrow("Invalid input - must not be empty.");
  });

  it("should not throw an error if the string contains non-space characters", () => {
    // Arrange
    const value = " a ";

    // Act
    const act = () => validateStringNotEmpty(value);

    // Assert
    expect(act).not.toThrow();
  });

  it("should not throw an error if the string is a valid non-empty string", () => {
    // Arrange
    const value = "valid string";

    // Act
    const act = () => validateStringNotEmpty(value);

    // Assert
    expect(act).not.toThrow();
  });
});

describe("validateNumber", () => {
  it("should throw an error if the input is not a number", () => {
    // Arrange
    const value = "abc";

    // Act
    const act = () => validateNumber(value);

    // Assert
    expect(act).toThrow("Invalid number input.");
  });

  it("should throw an error if the input is NaN", () => {
    // Arrange
    const value = NaN;

    // Act
    const act = () => validateNumber(value);

    // Assert
    expect(act).toThrow("Invalid number input.");
  });

  it("should throw an error if the input is undefined", () => {
    // Arrange
    const value = undefined;

    // Act
    const act = () => validateNumber(value);

    // Assert
    expect(act).toThrow("Invalid number input.");
  });

  it("should not throw an error if the input is a valid number", () => {
    // Arrange
    const value = 123;

    // Act
    const act = () => validateNumber(value);

    // Assert
    expect(act).not.toThrow();
  });

  // it("should not throw an error if the input is a string that can be converted to a number", () => {
  //   // Arrange
  //   const value = "123";

  //   // Act
  //   const act = () => validateNumber(value);

  //   // Assert
  //   expect(act).not.toThrow();
  // });
});
