import * as React from "react";
import LoadRoutes from "../routes/LoadRoutes";

import { BrowserRouter } from "react-router-dom";

import { NavBar } from ".";

const DefaultLayout = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <LoadRoutes />
      </div>
    </BrowserRouter>
  );
};

export default DefaultLayout;
