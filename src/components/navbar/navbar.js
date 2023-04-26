import React from "react";
import "./navbar.css";

const Navbar = ({ showSideBar, setShowSideBar }) => {
  return (
    <nav className="navbar ">
      <div className="navbar_main">
        <div className="brand_logo">
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682324225/mainstack-logo_bt3hgr.svg"
            alt="logo"
          />
        </div>

        {!showSideBar ? (
          <div className="hamburger" onClick={() => setShowSideBar(true)}>
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672872013/menu-2_kvyw9b.svg"
              alt="hamburger"
            />
          </div>
        ) : (
          <h3 onClick={() => setShowSideBar(false)} className="cancel_button">
            X
          </h3>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
