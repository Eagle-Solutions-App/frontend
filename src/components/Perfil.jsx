import React from "react";
import Navbar from "./Navbar";
import perfil from "../img/perfil.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

export default function Perfil() {
  const userActual = useSelector((state) => state.userActual);

  return (
    userActual && (
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
            <span>Rol: Administrador</span>
            {/* <span>Rol: {userActual.Rol.rol}</span> */}

            <div className="password">
              <Link to="/usuarios">
                <button>Cambio de contraseña</button>
              </Link>
            </div>
          </div>
          <div className="ayuda">
            <h2>Ayuda</h2>
            <p>Video instructivo de la pagina:</p>
            <div className="video">
              <ReactPlayer url="https://youtu.be/11LXZLx-FWg" controls />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
