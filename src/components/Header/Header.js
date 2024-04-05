import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.css";

function Header() {
  return (
    <div className="container-header">
      <Link to="/" className="header-link">
        <h1>Podcaster</h1>
      </Link>
    </div>
  );
}

export default Header;
