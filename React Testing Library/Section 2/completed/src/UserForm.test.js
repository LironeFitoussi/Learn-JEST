import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it show two inputs and a button", () => {
    // Arrange
    // Render the UserForm component
    render(<UserForm />);
    
    // Act
    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    
    // Assert
    // Check if the component is in the state you expect
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});