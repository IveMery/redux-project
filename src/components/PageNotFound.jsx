import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>Pagina no encontrada</h2>
      <Link to="/">
        <button>Ir al nicio</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
