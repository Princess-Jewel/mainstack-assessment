import React from "react";
import "./navbar.css";

const Navbar = ({ showSideBar, setShowSideBar }) => {
  return (
    <nav className="navbar_main">
      <div className="">
        <img
          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682324225/mainstack-logo_bt3hgr.svg"
          alt="logo"
        />
      </div>

      {!showSideBar && (
        <div
          className=""
          onClick={() => setShowSideBar(true)}
        >
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672872013/menu-2_kvyw9b.svg"
            alt="hamburger"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
