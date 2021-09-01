import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./../../assets/css/styles.css";

const SideBar = () => (

    <aside className="aside">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Inicio</MenuItem>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>

);
export default SideBar;
