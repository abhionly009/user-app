import React from "react";
import UserRow from "./UserRow";
import "./UserList.css";
function UserList() {
  "id, title, status, name, email, mobile";
  return (
    <div className="userList">
      <UserRow
        id="1"
        title="Software Engineer"
        status="active"
        name="Abhinandan"
        email="abhionly009@gmail.com"
        mobile="9005805189"
      />

      <UserRow
        id="1"
        title="Software Engineer"
        status="active"
        name="Abhinandan"
        email="abhionly009@gmail.com"
        mobile="9005805189"
      />
    </div>
  );
}

export default UserList;
