export function transformToNumber(value) {
  const number = +value;
  if (isNaN(number)) {
    throw new Error("Invalid number");
  }
  return number;
}
