import { extractEnteredNumberValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { outputResult, generateResultText } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(e) {
  e.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  const result = calculateResult(numberValues);

  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
