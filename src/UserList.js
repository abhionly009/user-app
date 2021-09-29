import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import "./UserList.css";
import requests from "./requests";
import axios from "./axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [emailVerified, setEmailVerified] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get(requests.userList);
    if (response.status === 200) {
      setUsers(response.data);
    }
  }

  const handler = (e) => {
    // e.preventDefault();
    console.log(emailVerified);
  };

  return (
    <div className="userList">
      <div className="userList__item">
        {users.map((user) => {
          return <UserRow data={user} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
