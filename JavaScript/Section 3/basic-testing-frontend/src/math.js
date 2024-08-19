export function add(numbers) {
  let sum = 0;

  // throw new Error("Not implemented yet");

  for (const number of numbers) {
    sum += Number(number);
  }
  return sum;
}
