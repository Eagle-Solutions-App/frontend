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
            <p>Categoría: Bien de uso</p>
            <p>Subcategoría: Materiales</p>
          </div>
          <div className="modalDesc">
            <p>Descripción:</p>
            <div className="descBox">{descripcion}</div>
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
