import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import People from "@material-ui/icons/PeopleRounded";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ProductionQuantityLimitsIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar">
      <Link to="/total" style={{ textDecoration: "none" }}>
        <SidebarOption
          Icon={People}
          title="Dash Board"
          selected={splitLocation[1] === "/total" ? "active" : ""}
        />
      </Link>

      <Link to="/userList" style={{ textDecoration: "none" }}>
        <SidebarOption
          Icon={ListAltIcon}
          title="Active Users"
          selected={splitLocation[1] === "userList" ? "active" : ""}
        />
      </Link>

      <Link to="/category" style={{ textDecoration: "none" }}>
        <SidebarOption
          Icon={PersonAddDisabledIcon}
          title="Category"
          selected={splitLocation[1] === "category" ? "active" : ""}
        />
      </Link>
      <Link to="/country" style={{ textDecoration: "none" }}>
        <SidebarOption
          Icon={LocationCityIcon}
          title="Country"
          selected={splitLocation[1] === "country" ? "active" : ""}
        />
      </Link>

      <Link to="/product" style={{ textDecoration: "none" }}>
        <SidebarOption
          Icon={ProductionQuantityLimitsIcon}
          title="Products"
          selected={splitLocation[1] === "product" ? "active" : ""}
        />
      </Link>
    </div>
  );
}

export default Sidebar;
