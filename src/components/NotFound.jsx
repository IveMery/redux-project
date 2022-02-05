import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h5 className="not-found-title">No encontramos la pagina que buscabas</h5>
      <Link to="/">
        <button className="not-found-btn">Volver al Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
