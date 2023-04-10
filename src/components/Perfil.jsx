import React from "react";
import Navbar from "./Navbar";
import perfil from "../img/perfil.jpg";

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
        </div>
      </div>
    </div>
  );
}
