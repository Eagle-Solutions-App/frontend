import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserCard({ nombre, email, editar, bloqueo, id }) {
  const [showModal, setShowModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const handleEdit = () => {
    setShowModal(true);
    // Aquí debes pasar los datos que deseas editar al componente del modal
  };

  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
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
        <Link to={`/editarUsuario/${id}`} style={{ textDecoration: "none" }}>
          <button onClick={handleEdit}>
            <img src={editar} alt="editar" />
          </button>
        </Link>

        <button onClick={() => onBlock(id)}>
          <img src={bloqueo} alt="bloqueo" />
        </button>
      </div>
    </>
  );
}
