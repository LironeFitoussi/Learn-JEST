import { validateStringNotEmpty, validateNumber } from "./validation.js";

export function transformToNumber(value) {
  const number = +value;
  if (isNaN(number)) {
    throw new Error("Invalid number");
  }
  return number;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
