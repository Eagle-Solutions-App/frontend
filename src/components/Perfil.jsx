import React from "react";
import Navbar from "./Navbar";
import perfil from "../img/perfil.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Perfil() {
  const userActual = useSelector((state) => state.userActual);
  console.log(userActual);

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="perfilContainer">
        <h2>Perfil</h2>
        <div className="perfilInfo">
          <span>
            <img src={perfil} alt=""></img>
            {userActual.nombre}
          </span>
          <span>Email: {userActual.email}</span>
          <span>Rol: Super Administrador</span>
          {/* <span>Rol: {userActual.Rol.rol}</span> */}

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
