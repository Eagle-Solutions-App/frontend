import React from "react";
import borrar from "../img/trash.png";
import editar from "../img/edit.png";
import bloqueo from "../img/bloqueo.png";
import { Link } from "react-router-dom";

export default function Card({
  nombre,
  categoria,
  subcategoria,
  id,
  descripcion,
  codigo,
}) {
  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };
  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };

  return (
    <div className="card">
      <div className="info">
        {descripcion ? (
          /* listado de productos */
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
                {categoria}
              </p>
            </div>

            <div className="cadaInfo">
              <p className="subcategoria">
                <b>Subcategoría: </b>
                {subcategoria}
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
            </div>
          </>
        ) : (
          /* panel de usuarios */
          <>
            <div className="cadaInfo">
              <p className="nombre">
                <b>Usuario: </b>
                {nombre}
              </p>
            </div>
            <div className="cadaInfo">
              <p className="categoria">
                <b>Permiso Actual: </b>
                {categoria}
              </p>
            </div>
            <div className="imagenes">
              <Link
                to={`/editarUsuario/${id}`}
                style={{ textDecoration: "none" }}
              >
                <button>
                  <img src={editar} alt="editar" />
                </button>
              </Link>

              <button onClick={() => onBlock(id)}>
                <img src={bloqueo} alt="bloqueo" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
