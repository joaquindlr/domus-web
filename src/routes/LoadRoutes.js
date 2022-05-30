import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Contact, 
  Catalog, Secretary, Clients, AddClients, Events, AddEvents } from "../views";

const LoadRoutes = () => {
  return (
    <Routes>
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/catalog" element={<Catalog />} />
      <Route exact path="/secretary" element={<Secretary />} />
      <Route exact path="/clients" element={<Clients />} />
      <Route exact path="/addclients" element={<AddClients />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/addevents" element={<AddEvents />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default LoadRoutes;
