import * as React from "react";
import "./PropertyCard.css";

const PropertyCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
        alt="house"
        className="property-image"
      />
      <div className="bubble-container">
        <p className="price-bubble">$15M</p>
        <p className="type-bubble">VENTA</p>
      </div>
      <p className="fw-bold fs-4 px-3">Oficina Mediana, 315 Stryker Court</p>
    </div>
  );
};

export default PropertyCard;
