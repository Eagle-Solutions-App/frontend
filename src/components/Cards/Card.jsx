import React from "react";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import bloqueo from "../../img/bloqueo.png";
import shopping from "../../img/shopping.png";
import UserCard from "./UserCard";
import DepositoCard from "./DepositoCard";
import ProdCard from "./ProdCard";

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
  provincia,
  calle,
  altura,
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
            descripcion={descripcion}
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
            borrar={borrar}
            id={id}
          />
        ) : (
          <DepositoCard
            nombre={nombre}
            pais={pais}
            ciudad={ciudad}
            provincia={provincia}
            calle={calle}
            altura={altura}
            editar={editar}
            borrar={borrar}
            id={id}
          />
        )}
      </div>
    </div>
  );
}
