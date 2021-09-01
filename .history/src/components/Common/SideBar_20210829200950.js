import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./../../assets/css/styles.css";

const SideBar = () => (
  <section className="content">
    <aside className="aside">
      <ul>
        <li>
          <a href="#"> Webs</a>
        </li>
        <li>
          <a href="#">Apps</a>
        </li>
        <li>
          <a href="#">Diseños</a>
        </li>
        <li>
          <a href="#">Otros</a>
        </li>
      </ul>
    </aside>
  </section>
);
export default SideBar;
