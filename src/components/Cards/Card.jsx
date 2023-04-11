import React from "react";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import bloqueo from "../../img/bloqueo.png";
import UserCard from "./UserCard";

export default function Card({ nombre, id, email, empresa, rol }) {
  return (
    <div className="card">
      <div className="info">
        <UserCard
          nombre={nombre}
          email={email}
          rol={rol}
          empresa={empresa}
          editar={editar}
          bloqueo={bloqueo}
          borrar={borrar}
          id={id}
        />
      </div>
    </div>
  );
}
