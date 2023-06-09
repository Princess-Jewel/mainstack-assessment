import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "./layout.css";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="mobile_view">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
      <div className="desktop_view">
        <Sidebar showSideBar={showSideBar} />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
