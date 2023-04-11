import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landCont">
      <div className="landingContainer">
        <div className="wrapper">
          <h1>Eagle Solutions</h1>
          <p>
            EAGLE SOLUTIONS pretende ser una herramienta de gestión para
            empresas de construcción, servicios mineros y distintas actividades
            conexas
          </p>
          <div className="buttonss">
            <NavLink to="/productos">
              <button>Iniciar Sesión</button>
            </NavLink>
            <NavLink to="/productos">
              <button>Registrarse</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
