import React, { useState } from "react";
import EditarUser from "../Edicion/EditarUser";

export default function UserCard({ nombre, email, editar, bloqueo, id }) {
  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleEditar = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="cadaInfo">
        <p className="nombre">
          <b>Usuario: </b>
          {nombre}
        </p>
      </div>
      <div className="cadaInfo">
        <p className="categoria">
          <b>Email: </b>
          {email}
        </p>
      </div>
      <div className="cadaInfo">
        <p className="categoria">
          <b>Permiso Actual: </b>
          ADMIN
        </p>
      </div>

      <div className="imagenes">
        <button onMouseDown={handleEditar}>
          <img src={editar} alt="editar" />
        </button>

        <button onClick={() => onBlock(id)}>
          <img src={bloqueo} alt="bloqueo" />
        </button>
      </div>

      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <EditarUser
          id={id}
          nombre={nombre}
          email={email}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
}
