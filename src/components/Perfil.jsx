import React from "react";
import Navbar from "./Navbar";
import perfil from "../img/perfil.jpg";
import { Link } from "react-router-dom";

export default function Perfil() {
  return (
    <div>
      <Navbar />
      <div className="perfilContainer">
        <h2>Perfil</h2>
        <div className="perfilInfo">
          <span>
            <img src={perfil} alt=""></img>
            Usuario nuevo
          </span>
          <span>Email: emailprueba@gmail.com</span>
          <span>Rol: Administrador</span>

          <div className="password">
            <Link to="/usuarios">
              <button>Cambio de contraseña</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
