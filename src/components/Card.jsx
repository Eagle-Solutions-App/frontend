import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";

export default function Card({ nombre, categoria, subcategoria }) {
  return (
    <div className="card">
      <div className="info">
        <p className="nombre">Producto: {nombre}</p>
        <p className="categoria">Categoría: {categoria}</p>
        <p className="subcategoria"> Subcategoría: {subcategoria}</p>
      </div>
      <div className="imagenes">
        <img src={editar} alt="editar" />
        <img src={borrar} alt="borrar" />
      </div>
    </div>
  );
}
