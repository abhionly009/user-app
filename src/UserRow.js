import React from "react";
import PeopleRounded from "@material-ui/icons/PeopleRounded";
import "./UserRow.css";
function UserRow({ id, title, status, name, email, mobile }) {
  return (
    <div className="userRow">
      <PeopleRounded />
      <h5>{title}</h5>
      <p>{name}</p>
      <p>{email}</p>
      <p>{mobile}</p>
      <h6>{status}</h6>
    </div>
  );
}

export default UserRow;
