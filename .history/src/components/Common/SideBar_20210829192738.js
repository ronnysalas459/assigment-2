import React from 'react';
import { SideBarData } from "./../../constants/SidebarData";

const SideBar = () => {

    SideBarData.map((item, index) => {
        return (
            <li key={index} >

            </li>
        );
    });
};

export default SideBar
