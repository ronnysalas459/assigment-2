import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "./../../assets/css/styles.css";

const SideBar = () => (

    <aside className="aside">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FiHome />}> Inicio</MenuItem>
          <MenuItem>Peliculas</MenuItem>
          <MenuItem>Series TV</MenuItem>
          <MenuItem>Música</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>

);
export default SideBar;
