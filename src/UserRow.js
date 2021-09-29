import React from "react";
import { VerifiedUserRounded } from "@material-ui/icons";
import "./UserRow.css";
function UserRow(user) {
  return (
    <div className="userRow">
      <p className="username">{user.data.name}</p>

      <div className="email">
        <p>{user.data.email}</p>

        {user.data.emailVerified ? (
          <VerifiedUserRounded className="verified" />
        ) : (
          ""
        )}
      </div>

      <div className="mobile">
        <p>{user.data.mobile}</p>
        {user.data.mobileVerified ? (
          <VerifiedUserRounded className="verified" />
        ) : (
          ""
        )}
      </div>

      <p className="role">{user.data.role}</p>
    </div>
  );
}

export default UserRow;
