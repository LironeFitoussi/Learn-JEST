import { vi, it, describe, expect, beforeEach } from "vitest";

// Importing file system module to access HTML file
import fs from "fs";
import path from "path";

import { showError } from "./dom";

// Importing Window from happy-dom
import { Window } from "happy-dom";

// vi.stubGlobal("document", {}); //! Not Recommended because document is a complex object

// Reading the HTML file
const htmlDocPath = path.join(process.cwd(), "./index.html");
const htmlContent = fs.readFileSync(htmlDocPath).toString();

// Create an emulated window object
const window = new Window();

// Accessing the document object from the window object
const document = window.document;

// Setting the HTML content to the document
document.write(htmlContent);

vi.stubGlobal("document", document);
// it("first test", () => {
//   showError("Test Error Message");
// });

beforeEach(() => {
  document.body.innerHTML = ""; // Resetting the Body of the Document
  document.write(htmlContent); // Resetting the HTML content to the Initial Document
});

it("should add an error paragraph to the id 'error' element", () => {
  showError("Test Error Message");

  const errorElement = document.getElementById("errors");

  const errorParagraph = errorElement.firstChild;

  expect(errorParagraph.textContent).toBe("Test Error Message");
  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph innitially", () => {
  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstChild;

  expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testErrorMessage = "Test Error Message";

  showError(testErrorMessage);

  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstChild;

  expect(errorParagraph.textContent).toBe(testErrorMessage);
});
