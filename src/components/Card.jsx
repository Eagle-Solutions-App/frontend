import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";
import { Link } from "react-router-dom";

export default function Card({ nombre, categoria, subcategoria }) {
  return (
    <div className="card">
      <div className="info">
        <div className="cadaInfo">
          <p className="nombre">
            <b>Producto: </b>
            {nombre}
          </p>
        </div>

        <div className="cadaInfo">
          <p className="categoria">
            <b>Categoría: </b>
            {categoria}
          </p>
        </div>

        <div className="cadaInfo">
          <p className="subcategoria">
            <b>Subcategoría: </b>
            {subcategoria}
          </p>
        </div>
      </div>
      <div className="imagenes">
        <Link to="/editarProd" style={{ textDecoration: "none" }}>
          <button>
            <img src={editar} alt="editar" />
          </button>
        </Link>
        <button>
          <img src={borrar} alt="borrar" />
        </button>
      </div>
    </div>
  );
}
