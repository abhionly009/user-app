import React, { useState } from "react";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/NotificationImportant";
import { useHistory } from "react-router";

import "./Header.css";
import axios from "./axios";
import requests from "./requests";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();

  const userinfo = localStorage.getItem("userdetails");
  const userData = JSON.parse(userinfo);

  const profileSectionHandler = () => {
    if (userData != null) setIsModalOpen(!isModalOpen);
  };

  async function logout() {
    const bodyParameters = {
      authToken: userData.authToken,
    };

    const logoutRequest = requests.logout + `${userData.authToken}`;

    const response = await axios.post(logoutRequest);
    if (response.status === 200) {
      setIsModalOpen(!isModalOpen);
      localStorage.clear("userDetails");
      history.push("/");
    }
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>

        <h2>Admin Dashboard</h2>
      </div>

      <div className="header__right">
        <div className="topSection">
          <IconButton>
            <AppIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={profileSectionHandler}>
            <img
              src="http://localhost:8089/user-photos/18/IMG_20171101_103419.jpg"
              alt="user"
              className="imageCircle"
            />
          </IconButton>
        </div>
        <div
          className={isModalOpen ? "showProfileSection" : "hideProfileSection"}
        >
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>
          <p>{userData?.mobile}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
