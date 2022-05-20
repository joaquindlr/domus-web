import * as React from "react";
import "./NavBar.css";

import LOGO from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <img src={LOGO} alt="logo" className="" />
      <div className="menu-container">
        <p className="menu-item">Home</p>
        <p className="menu-item">Catalogo</p>
        <p className="menu-item">Acerda de</p>
        <p className="menu-item">Contacto</p>
      </div>
    </div>
  );
};

export default NavBar;
