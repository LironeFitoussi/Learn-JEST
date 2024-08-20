import { expect, it, vi, describe, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test Title";
const testContent = "Test Content";
let testFormData;
describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(id) {
        return this[id];
      },
    };
  });

  it("should extract the title and content from a formData Object", () => {
    const result = extractPostData(testFormData);

    expect(result.title).toBe(testTitle);
    expect(result.content).toBe(testContent);
  });
});
