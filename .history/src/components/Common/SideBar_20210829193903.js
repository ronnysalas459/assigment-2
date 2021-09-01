import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./../../assets/css/styles.css";

const SideBar = () => (
  <ProSidebar className = "sidebar">
    <Menu iconShape="square">
      <MenuItem >Dashboard</MenuItem>
      <SubMenu title="Components">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
  </ProSidebar>
);
export default SideBar;
