import React from "react";
import { VerifiedUserRounded } from "@material-ui/icons";
import "./UserRow.css";
function UserRow(user) {
  console.log("object", user);
  return (
    <div className="userRow">
      <h5 className="username">{user.data.name}</h5>
      <p>{user.data.email}</p>

      {user.data.emailVerified ? (
        <VerifiedUserRounded className="verified" />
      ) : (
        ""
      )}

      <p>{user.data.mobile}</p>
      {user.data.mobileVerified ? (
        <VerifiedUserRounded className="verified" />
      ) : (
        ""
      )}
      <p>{user.data.role}</p>
    </div>
  );
}

export default UserRow;
