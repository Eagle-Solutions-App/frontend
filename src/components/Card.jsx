import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";
import bloqueo from "../img/bloqueo.png";
import shopping from "../img/shopping.png";
import UserCard from "./Cards/UserCard";
import DepositoCard from "./Cards/DepositoCard";
import ProdCard from "./Cards/ProdCard";

export default function Card({
  nombre,
  categoria,
  subcategoria,
  id,
  descripcion,
  codigo,
  email,
  pais,
  ciudad,
}) {
  return (
    <div className="card">
      <div className="info">
        {descripcion ? (
          /* listado de productos */
          <ProdCard
            nombre={nombre}
            categoria={categoria}
            codigo={codigo}
            subcategoria={subcategoria}
            borrar={borrar}
            editar={editar}
            shopping={shopping}
            id={id}
          />
        ) : email ? (
          /* panel de usuarios */
          <UserCard
            nombre={nombre}
            email={email}
            editar={editar}
            bloqueo={bloqueo}
            id={id}
          />
        ) : (
          <DepositoCard
            nombre={nombre}
            pais={pais}
            ciudad={ciudad}
            editar={editar}
            borrar={borrar}
            id={id}
          />
        )}
      </div>
    </div>
  );
}
