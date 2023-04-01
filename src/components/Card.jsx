import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";

export default function Card({ nombre, categoria, subcategoria }) {
  return (
    <div className="card">
      <div className="info">
        <p className="nombre">
          <b>Producto: </b>
          {nombre}
        </p>
        <p className="categoria">
          <b>Categoría: </b>
          {categoria}
        </p>
        <p className="subcategoria">
          <b>Subcategoría: </b>
          {subcategoria}
        </p>
      </div>
      <div className="imagenes">
        <img src={editar} alt="editar" />
        <img src={borrar} alt="borrar" />
      </div>
    </div>
  );
}
