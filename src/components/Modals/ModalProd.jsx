import React from "react";
import { Link } from "react-router-dom";

export default function ModalProd({
  setShowModal,
  id,
  nombre,
  codigo,
  descripcion,
  subcategoria,
  shopping,
  editar,
}) {
  return (
    <div className="modalProd">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>
        {nombre}({codigo})
      </h2>
      <div className="formModal">
        <div className="infoModal">
          <div className="modalCats">
            <p>
              <b style={{ textDecoration: "underline 2px" }}> Categoría:</b>
              <br></br> Bien de uso
            </p>
            <p>
              <b style={{ textDecoration: "underline 2px" }}> Subcategoría:</b>
              <br></br> Materiales
            </p>
          </div>
          <div className="descObs">
            <div className="modalDesc">
              <p>
                <b style={{ textDecoration: "underline 2px" }}>Descripción:</b>
              </p>
              <pre className="descBox">{descripcion}</pre>
            </div>
          </div>
        </div>

        <div className="modalBtns">
          <button className="btnCart">
            Añadir al carrito
            <img src={shopping} alt="shopping" />
          </button>

          <Link to={`/editarProd/${id}`} style={{ textDecoration: "none" }}>
            <button className="btnEdit">
              Editar Producto
              <img src={editar} alt="editar" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
