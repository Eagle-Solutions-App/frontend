import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserCard({ nombre, pais, editar, ciudad, borrar, id }) {
  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };

  return (
    <>
      <div className="cadaInfo">
        <p className="nombre">
          <b>Nombre: </b>
          {nombre}
        </p>
      </div>
      <div className="cadaInfo">
        <p className="categoria">
          <b>País: </b>
          {pais}
        </p>
      </div>
      <div className="cadaInfo">
        <p className="categoria">
          <b>Ciudad: </b>
          {ciudad}
        </p>
      </div>
      <div className="imagenes">
        <Link to={`/editarUsuario/${id}`} style={{ textDecoration: "none" }}>
          <button>
            <img src={editar} alt="editar" />
          </button>
        </Link>

        <button onClick={() => onClose(id)}>
          <img src={borrar} alt="borrar" />
        </button>
      </div>
    </>
  );
}
