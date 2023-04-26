import React from "react";

export default function ModalEmpresa({
  setShowModal,
  id,
  nombre,
  email,
  /* imagen, */
  estadoPago,
  fechaSuscrip,
  tiempoSuscrip,
}) {
  return (
    <div className="modalEmpresa">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>{nombre}</h2>
      <div className="formModal">
        <div className="infoModal">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/04/ge-general-electric-logo-0.png"
            alt=""
          />
          <p>Nombre: {nombre}</p>
          <p>Email: {email}</p>
          <p>Suscripto desde: {fechaSuscrip.slice(0, 10)}</p>
          <p>
            Estado de pago:{" "}
            {tiempoSuscrip === true
              ? "Último pago depositado correctamente ✔️"
              : "Pago no realizado, cuota vencida ❌"}
          </p>
        </div>
      </div>
    </div>
  );
}
