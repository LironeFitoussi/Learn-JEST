import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm/>);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION

  // Create a mock function
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  // Try to render my component
  render(<UserForm onUserAdd={callback} />);
  
  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox"); // Destructuring the array of inputs

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing in an email
  await user.click(emailInput); // Simulate clicking the input
  await user.keyboard("jane@jane.com"); // This is not a real email

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  await user.click(button);

  // Make sure inputs values are now 'jane' and 'jane@jane.com'

  expect(nameInput).toHaveValue("jane");
  expect(emailInput).toHaveValue("jane@jane.com");

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "jane", email: "jane@jane.com" });
});
