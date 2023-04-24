import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import MobileMenu from "../mobileMenu/mobileMenu";
import Sidebar from "../sidebar/sidebar";
import "./layout.css";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      {/* {showSideBar ? (
        <Sidebar />
      ) : (
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      )} */}

      <div className="mobile_view">
        <Navbar />
        <MobileMenu />
      </div>
      <div className="desktop_view">
        <div className="">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
