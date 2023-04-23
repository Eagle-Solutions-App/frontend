import React from "react";

export default function ModalEmpresa({
  setShowModal,
  id,
  nombre,
  email,
  imagen,
  estadoPago,
}) {
  return (
    <div className="modalEmpresa">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>{nombre}</h2>
      <div className="formModal">
        <div className="infoModal">
          <img src={imagen} alt="" />
          <p>Nombre: {nombre}</p>
          <p>Email: {email}</p>
          <p>
            Estado de pago:{" "}
            {estadoPago === true && "Último pago depositado correctamente ✔️"}
          </p>
        </div>
      </div>
    </div>
  );
}
