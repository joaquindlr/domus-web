import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Contact } from "../views";

const LoadRoutes = () => {
  return (
    <Routes>
      <Route exact path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default LoadRoutes;
