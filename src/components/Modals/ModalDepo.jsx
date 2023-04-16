import React from "react";
import { Link } from "react-router-dom";

export default function ModalDepo({
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
  observaciones,
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
            <p>
              <b style={{ textDecoration: "underline 2px" }}>Ciudad(prov.):</b>{" "}
              <br></br>
              {`${ciudad}(${provincia})`}
            </p>
            <p>
              <b style={{ textDecoration: "underline 2px" }}>País:</b>
              <br></br> {pais}
            </p>
            <p>
              <b style={{ textDecoration: "underline 2px" }}>Dirección:</b>
              <br></br> {`${calle} ${altura}`}
            </p>
          </div>
          <div className="descObs">
            <div className="modalDesc">
              <p>
                <b style={{ textDecoration: "underline 2px" }}>Descripción:</b>
              </p>
              <div className="descBox">{descripcion}</div>
            </div>
            <div className="modalObs">
              <p>
                <b style={{ textDecoration: "underline 2px" }}>
                  Observaciones:
                </b>
              </p>
              <div className="obsBox">{observaciones}</div>
            </div>
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
