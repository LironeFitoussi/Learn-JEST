export function transformToNumber(value) {
  if (isNaN(+value)) {
    throw new Error("Invalid number");
  }
  return +value;
}
