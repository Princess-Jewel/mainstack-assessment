import React from "react";
import {
  DASHBOARD_SIDEBAR_FIRST_ITEM,
  DASHBOARD_SIDEBAR_SECOND_ITEM,
  DASHBOARD_SIDEBAR_THIRD_ITEM,
} from "../lib/navigation";
import "./sidebar.css";
import SidebarLink from "./sidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      {/* Logo */}
      <div className="desktop_logo">
        <img
          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682324225/mainstack-logo_bt3hgr.svg"
          alt="logo"
        />
      </div>
      {/* NAVIGATION SECTION */}
      <div>
        <div className="sidebar_navigation">
          {DASHBOARD_SIDEBAR_FIRST_ITEM.map(link => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        <div className="sidebar_navigation">
          <p className="sidebar_title">OTHERS 1</p>
          {DASHBOARD_SIDEBAR_SECOND_ITEM.map(link => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        <div className="sidebar_navigation">
          <p className="sidebar_title">OTHERS 2</p>
          {DASHBOARD_SIDEBAR_THIRD_ITEM.map(link => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>
      </div>

      {/* ASIDE SECTION */}
      <div className="profile_aside">
        <div className="profile_and_name">
          <div className="profile_image">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682332599/image_oyuslx.svg"
              alt="profile img"
            />
          </div>
          <p>Blessing Daniels</p>
        </div>
        <div className="menu_image">
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682332598/more_horiz_ggppjn.svg"
            alt="menu img"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar