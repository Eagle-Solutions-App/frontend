import React from "react";
import { Link } from "react-router-dom";

export default function ModalProd({
  setShowModal,
  id,
  nombre,
  descripcion,
  pais,
  provincia,
  calle,
  altura,
  ciudad,
  editar,
}) {
  return (
    <div className="modalProd">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>{nombre}</h2>
      <div className="formModal">
        <div className="infoModal">
          <div className="modalCats">
            <p>Ciudad(prov.): {`${ciudad}(${provincia})`}</p>
            <p>País: {pais}</p>
            <p>Dirección: {`${calle} ${altura}`}</p>
          </div>
          <div className="modalDesc">
            <p>Descripción:</p>
            <div className="descBox">{descripcion}</div>
          </div>
        </div>

        <div className="modalBtns">
          <Link to={`/editarDepo/${id}`} style={{ textDecoration: "none" }}>
            <button className="btnEdit">
              Editar Depósito
              <img src={editar} alt="editar" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
