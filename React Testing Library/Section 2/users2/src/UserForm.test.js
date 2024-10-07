// Import the render and screen objects from the testing library
import { render, screen } from "@testing-library/react";

// Import the user-event library
import user from "@testing-library/user-event";

// Import the UserForm component
import UserForm from "./UserForm";

// Create a test suite which is provided by our test runner
test("it shows two input fields and a button", () => {
  // AAA - Arrange, Act, Assert

  // Arrange - set up the test
  // Render the UserForm component
  render(<UserForm />);

  // Act - interact with the component
  // Manipluate the component or find an element in it

  // Assert - make sure the component is doing what we expect it to do
  // Assersion - make sre the component is doing what we expect it to do
});
