import React from "react";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import AppIcon from "@material-ui/icons/Apps";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/NotificationImportant";
import Facebook from "./facebook.png";

import "./Header.css";

function Header() {
  const userinfo = localStorage.getItem("userdetails");
  console.log("user data ", JSON.parse(userinfo));
  const userData = JSON.parse(userinfo);

  const profileSectionHandler = () => {};

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
        <div className="profileSection">
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.mobile}</p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
