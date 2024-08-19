import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user;

beforeAll(() => {
  user = new User(testEmail);
  console.log("Before all tests");
});

beforeEach(() => {
  console.log("Before each test");
  // Reset the email before each test
  user = new User(testEmail);
});

afterEach(() => {
  console.log("After each test");

  // Reset the email after each test
  user = new User(testEmail);
});

afterAll(() => {
  console.log("After all tests");
  console.log("Cleaning up...");
});

it("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after clearing the email", () => {
  user.clearEmail();

  expect(user).toHaveProperty("email");
});
