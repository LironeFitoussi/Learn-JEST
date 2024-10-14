import React from "react";

function MoreNames() {
  return (
    <div>
        <label htmlFor="email">Email</label>
        <input id="email" />

        <label 
            htmlFor="password"
        >Password</label>
        <input id="password" />
    </div>
  );
}

export default MoreNames;