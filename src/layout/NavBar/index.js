import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import LOGO from "../../assets/logo.png";

const NavBar = ({ isInHome }) => {
  return (
    <div
      className={`nav-bar-container ${
        !isInHome ? "nav-bar-container-no-home" : ""
      }`}
    >
      <img src={LOGO} alt="logo" className="" />
      <div className="menu-container">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/catalog" className="menu-item">
          Catalogo
        </Link>
        <Link to="/contact" className="menu-item">
          Contacto
        </Link>
        <p className="menu-item">Acerca de</p>
      </div>
    </div>
  );
};

export default NavBar;
