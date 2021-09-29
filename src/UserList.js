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
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isMobileVerified, setIsMobileVerified] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await axios.get(requests.userList);
    if (response.status === 200) {
      setUsers(response.data);
    }
  }

  const handler = (event) => {
    // e.preventDefault();

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (value && name === "verifiedEmail") {
      setIsEmailVerified(value);

      users.filter((user) => {
        return user.mobileVerified === true;
      }, users);
    } else if (value && name === "verifiedMobile") {
      setIsMobileVerified(value);
    }
  };

  return (
    <div className="userList">
      <div className="userList__filter">
        <label>
          Email Verified
          <input
            name="verifiedEmail"
            type="checkbox"
            checked={isEmailVerified}
            onChange={(e) => {
              handler(e);
            }}
          />
        </label>

        <label>
          Mobile Verified
          <input
            name="verifiedMobile"
            type="checkbox"
            checked={isMobileVerified}
            onChange={(e) => {
              handler(e);
            }}
          />
        </label>
      </div>

      <div className="userList__item">
        {users.map((user) => {
          return <UserRow data={user} />;
        })}
      </div>
    </div>
  );
}

export default UserList;
