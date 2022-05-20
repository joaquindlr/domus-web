import * as React from "react";
import LoadRoutes from "../routes/LoadRoutes";

import { BrowserRouter } from "react-router-dom";

import { NavBar } from ".";

const DefaultLayout = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "red", height: "100%" }}>
        {/* <NavBar /> */}
        <LoadRoutes />
      </div>
    </BrowserRouter>
  );
};

export default DefaultLayout;
