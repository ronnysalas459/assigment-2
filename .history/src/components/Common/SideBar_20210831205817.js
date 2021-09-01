import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./../../assets/css/styles.css";

const SideBar = () => (

    <aside className="aside">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Inicio</MenuItem>
          <MenuItem>Peliculas</MenuItem>
          <MenuItem>Series TV</MenuItem>
          <MenuItem>Música</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>

);
export default SideBar;
