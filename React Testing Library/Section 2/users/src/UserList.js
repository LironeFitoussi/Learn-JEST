import React from "react";

const UserList = ({ users }) => {
  const renderedUser = users.map((user, index) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUser}</tbody>
    </table>
  );
};

export default UserList;
