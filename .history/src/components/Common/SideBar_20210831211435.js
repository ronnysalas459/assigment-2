import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaHome, FaFilm, FaPlay, FaMusic } from "react-icons/fa";
import "./../../assets/css/styles.css";

const SideBar = () => (

    <aside className="aside">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}> Inicio</MenuItem>
          <MenuItem icon={<FaFilm/>}> Peliculas</MenuItem>
          <MenuItem icon={<FaPlay/>}> Series TV</MenuItem>
          <MenuItem icon={<FaMusic/>}>Música</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>

);
export default SideBar;
