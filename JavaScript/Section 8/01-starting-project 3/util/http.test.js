import { expect, it, describe, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors.js";

const testResponseData = { message: "Success!" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      reject(new Error("Body is not a string!"));
    }
    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

const testErrorFetch = vi.fn((url, options) => {
  return new Promise((resolve) => {
    const testResponse = {
      ok: false,
      json: () => {
        return new Promise((resolve) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

describe("Successful request", () => {
  it("should return any available data", async () => {
    vi.stubGlobal("fetch", testFetch);

    // Arrange
    const data = { title: "Test Post", content: "Test Content" };

    // Act
    const response = await sendDataRequest(data);

    // Assert
    expect(response).toEqual(testResponseData);
  });

  it("should convert the provided data to JSON before sending it", async () => {
    vi.stubGlobal("fetch", testFetch);

    // Arrange
    const data = { title: "Test Post", content: "Test Content" };

    let errorMsg = "";
    // Act
    try {
      await sendDataRequest(data);
    } catch (error) {
      errorMsg = error.message;
    }

    // Assert
    expect(errorMsg).not.toBe("Not a string!");
  });
});

describe("Failed request", () => {
  it("should throw an error if the request fails", async () => {
    vi.stubGlobal("fetch", testErrorFetch);
    // Arrange
    const data = { title: "Test Post", content: "Test Content" };

    let caughtError;
    try {
      // Act
      await sendDataRequest(data);
    } catch (error) {
      caughtError = error;
    }

    // Assert
    expect(caughtError).toBeDefined();
  });

  it("should throw an error which is an instance of HttpError", async () => {
    vi.stubGlobal("fetch", testErrorFetch);
    // Arrange
    const data = { title: "Test Post", content: "Test Content" };

    let caughtError;
    try {
      // Act
      await sendDataRequest(data);
    } catch (error) {
      caughtError = error;
    }

    // Assert
    expect(caughtError).toBeInstanceOf(HttpError);
  });
});
