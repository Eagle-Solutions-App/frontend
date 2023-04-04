import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({
  nombre,
  categoria,
  editar,
  subcategoria,
  codigo,
  shopping,
  borrar,
  id,
}) {
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
          <b>Producto: </b>
          {nombre}({codigo})
        </p>
      </div>

      <div className="cadaInfo">
        <p className="categoria">
          <b>Categoría: </b>
          {categoria || "Bien de Uso"}
        </p>
      </div>

      <div className="cadaInfo">
        <p className="subcategoria">
          <b>Subcategoría: </b>
          {subcategoria || "Materiales"}
        </p>
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
        <button>
          <img src={shopping} alt="shopping" />
        </button>
      </div>
    </>
  );
}
