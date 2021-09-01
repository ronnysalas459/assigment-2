import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaFilm, FaPlay } from "react-icons/fa";
import "./../../assets/css/styles.css";

const SideBar = () => (

    <aside className="aside">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FiHome />}> Inicio</MenuItem>
          <MenuItem icon={<FaFilm/>}> Peliculas</MenuItem>
          <MenuItem icon={<FaPlay/>}>Series TV</MenuItem>
          <MenuItem>Música</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>

);
export default SideBar;
