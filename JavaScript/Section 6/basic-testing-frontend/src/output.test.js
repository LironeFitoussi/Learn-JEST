import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  describe("Should return a string no matter which value is passed", () => {
    describe("generateResultText - Regular Values", () => {
      it("Should return a string when a string value is passed", () => {
        // Arrange
        const stringInput = "10";

        // Act
        const result = generateResultText(stringInput);

        // Assert
        expect(typeof result).toBe("string");
      });

      it("Should return a string when a number value is passed", () => {
        // Arrange
        const numberInput = 10;

        // Act
        const result = generateResultText(numberInput);

        // Assert
        expect(typeof result).toBe("string");
      });

      it("Should return a string when a boolean value is passed", () => {
        // Arrange
        const booleanInput = true;

        // Act
        const result = generateResultText(booleanInput);

        // Assert
        expect(typeof result).toBe("string");
      });

      it("Should return a string when an object value is passed", () => {
        // Arrange
        const objectInput = {};

        // Act
        const result = generateResultText(objectInput);

        // Assert
        expect(typeof result).toBe("string");
      });

      it("Should return a string when an array value is passed", () => {
        // Arrange
        const arrayInput = [];

        // Act
        const result = generateResultText(arrayInput);

        // Assert
        expect(typeof result).toBe("string");
      });
    });

    describe("generateResultText - Nullish Values", () => {
      it("Should return a string when a null value is passed", () => {
        // Arrange
        const nullInput = null;

        // Act
        const result = generateResultText(nullInput);

        // Assert
        expect(typeof result).toBe("string");
      });

      it("Should return a string when an undefined value is passed", () => {
        // Arrange
        const undefinedInput = undefined;

        // Act
        const result = generateResultText(undefinedInput);

        // Assert
        expect(typeof result).toBe("string");
      });
    });
  });

  it("Should return 'Invalid input.' if 'invalid' response is passed", () => {
    // AAA Model

    // Arrange
    const calculationResult = "invalid";

    // Act
    const result = generateResultText(calculationResult);

    // Assert
    expect(result).toContain("Invalid input.");
  });

  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});
