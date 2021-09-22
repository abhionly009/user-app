import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import People from "@material-ui/icons/PeopleRounded";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ProductionQuantityLimitsIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption Icon={ListAltIcon} title="Active Users" />
      <SidebarOption Icon={People} title="Total Users" selected />
      <SidebarOption Icon={PersonAddDisabledIcon} title="Inactive User" />

      <SidebarOption Icon={LocationCityIcon} title="Country" />
      <SidebarOption Icon={ProductionQuantityLimitsIcon} title="Products" />
    </div>
  );
}

export default Sidebar;
