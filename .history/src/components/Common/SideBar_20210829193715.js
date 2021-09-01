import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";


const SideBar = () => (
  <ProSidebar>
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
