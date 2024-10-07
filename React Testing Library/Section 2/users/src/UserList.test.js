import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserList from "./UserList";

describe("UserList Component", () => {
    const users = [
        { name: "Jane", email: "jane@dummy.com" },
        { name: "John", email: "john@dummy.com" },
    ];

    it("shows a table with the correct headers", () => {
        // Act
        render(<UserList users={users} />);
        const nameHeader = screen.getByText("Name");
        const emailHeader = screen.getByText("Email");

        // Assert
        expect(nameHeader).toBeInTheDocument();
        expect(emailHeader).toBeInTheDocument();
    });

    it("shows one row for each user", () => {
        // Act
        render(<UserList users={users} />);
        
        // Find all the rows in the table
        // screen.logTestingPlaygroundURL();
        const rows = screen.getAllByRole("row");


        // Assert
        expect(rows).toHaveLength(users.length + 1);
    });
});