import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";

export default function PermisosAUsuarios() {
  const usuarios = useSelector((state) => state.usuarios);
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subCategoria: "",
    descripcion: "",
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="inicioBtn">Inicio</button>
        </Link>
        <h2>Panel de usuarios</h2>
        <div className="cards">
          {usuarios?.map((user) => {
            return (
              <div>
                <Card
                  nombre={user.nombre}
                  categoria={user.permisoActual}
                  id={user.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
