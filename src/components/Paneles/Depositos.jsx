import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Card from "../Card";
import Paginado from "../Paginado";

export default function Depósitos() {
  const depositos = useSelector((state) => state.depositos);

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <button className="inicioBtn">Inicio</button>
        </Link> */}

        <h2>Panel de Depósitos</h2>

        <Link to="/createDepositos" style={{ textDecoration: "none" }}>
          <button className="crear">Crear Depósito</button>
        </Link>
        <Paginado />
        <div className="cards">
          {depositos.map((dep) => (
            <div key={dep.id}>
              <Card
                nombre={dep.nombre}
                pais={dep.pais}
                ciudad={dep.ciudad}
                id={dep.id}
              />
            </div>
          ))}
        </div>

        <Paginado />
      </div>
    </div>
  );
}
