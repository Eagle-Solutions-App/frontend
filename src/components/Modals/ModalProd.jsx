import React from "react";

export default function ModalProd({
  setShowModal,
  id,
  nombre,
  codigo,
  descripcion,
  subcategoria,
  shopping,
}) {
  return (
    <div className="containerModal">
      <>
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>{nombre}</h2>
        <form className="formModal">
          <div className="editModal">
            <div className="infoModal">
              <div className="nameModal">
                <p>
                  Producto: {nombre}({codigo})
                </p>
                <p>Subcategoría: {subcategoria}</p>
                <p>Descripción: {descripcion}</p>
              </div>
            </div>
          </div>

          <div className="editSubmit">
            <button>
              <img src={shopping} alt="shopping" />
            </button>
          </div>
        </form>
      </>
    </div>
  );
}
