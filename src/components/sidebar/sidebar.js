import React from "react";
import {
  DASHBOARD_SIDEBAR_FIRST_ITEM,
  DASHBOARD_SIDEBAR_SECOND_ITEM,
  DASHBOARD_SIDEBAR_THIRD_ITEM,
} from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
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
          <p className="sidebar_title">OTHERS 1</p>
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

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={`sidebarLink ${
        pathname === link.path ? "active" : "notActive"
      }`}
    >
      <div className="sidebar_icon">
        <img src={link.icon} alt={link.label} />
      </div>
      {link.label}
      {link.notifications && (
        <p
          className="rounded-2xl bg-notification-bg px-2.5 py-0.5 text-sm font-medium text-dashboard-link-text font-display ml-auto
                  flex-shrink-0"
        >
          {link.notifications}
        </p>
      )}
    </Link>
  );
}
