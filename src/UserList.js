import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import "./UserList.css";
import requests from "./requests";
import axios from "./axios";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get(requests.userList);
    if (response.status === 200) {
      setUsers(response.data);
    }
  }

  return (
    <div className="userList">
      {users.map((user) => {
        return <UserRow data={user} />;
      })}
    </div>
  );
}

export default UserList;
