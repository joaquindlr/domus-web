import * as React from "react";
import "./Catalog.css";

//components
import { NavBar } from "../../layout";
import { PropertyCard } from "../../components";

const Catalog = () => {
  return (
    <div className="container">
      <NavBar />
      <div>
        <PropertyCard />
      </div>
    </div>
  );
};

export default Catalog;
