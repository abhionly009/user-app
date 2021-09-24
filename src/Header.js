import React from "react";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import AppIcon from "@material-ui/icons/Apps";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/NotificationImportant";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>

        <h2>Admin Dashboard</h2>
      </div>

      <div className="header__right">
        <IconButton>
          <AppIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
