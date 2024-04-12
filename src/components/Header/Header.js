import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.css";

function Header({ loader }) {
  return (
    <div className="container-header">
      <Link to="/" className="header-link">
        <div className="head">
          <h1>Podcaster</h1>
          <div className="loader-container">
            {loader && (
              <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
