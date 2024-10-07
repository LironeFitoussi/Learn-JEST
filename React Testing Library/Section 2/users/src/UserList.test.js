import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
    const users = [
        { name: "Jane", email: "jane@dummy.com" },
        { name: "John", email: "john@dummy.com" },
    ];
    render(<UserList users={users} />);

    return {
        users
    };
}

// NOT RECOMMENDED
// beforeEach(() => {
//     renderComponent();
// });

describe("UserList Component", () => {
    // screen.logTestingPlaygroundURL()
    it("shows a table with the correct headers", () => {
        // Act
        renderComponent();
        const nameHeader = screen.getByText("Name");
        const emailHeader = screen.getByText("Email");

        // Assert
        expect(nameHeader).toBeInTheDocument();
        expect(emailHeader).toBeInTheDocument();
    });

    it("shows one row for each user", () => {
        // Act
        const { users } = renderComponent();

        // Find all the rows in the table
        const rows = within(screen.getByTestId("user")).getAllByRole("row");

        // Assert
        expect(rows).toHaveLength(users.length);
    });

    it("shows the correct user data in each row", () => {
        const { users } = renderComponent();
        
        // Find all the rows in the table
        // const rows = within(screen.getByTestId("user")).getAllByRole("row");

        // Assert
        for ( let user of users ) {
            const name = screen.getByRole("cell", { name: user.name });
            const email = screen.getByRole("cell", { name: user.email });

            expect(name).toBeInTheDocument();
            expect(email).toBeInTheDocument();
        }
    });
});