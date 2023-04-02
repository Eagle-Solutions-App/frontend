import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";
import { Link } from "react-router-dom";

export default function Card({ nombre, categoria, subcategoria, id }) {
  const onClose = (id) => {
    let res = window.confirm(`Estás seguro de querere borrar "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };

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
        <Link to={`/editarProd/${id}`} style={{ textDecoration: "none" }}>
          <button>
            <img src={editar} alt="editar" />
          </button>
        </Link>

        <button onClick={() => onClose(id)}>
          <img src={borrar} alt="borrar" />
        </button>
      </div>
    </div>
  );
}
