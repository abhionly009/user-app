import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import People from "@material-ui/icons/PeopleRounded";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ProductionQuantityLimitsIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/userList" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={ListAltIcon} title="Active Users" selected />
      </Link>
      <Link to="/" activeClassName="active" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={People} title="Total Users" />
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={PersonAddDisabledIcon} title="Inactive User" />
      </Link>
      <Link to="/country" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={LocationCityIcon} title="Country" />
      </Link>

      <Link to="/product" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={ProductionQuantityLimitsIcon} title="Products" />
      </Link>
    </div>
  );
}

export default Sidebar;
