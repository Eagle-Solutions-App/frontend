import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/actions";
import EditarUser from "../Edicion/EditarUser";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import bloqueo from "../../img/bloqueo.png";

export default function UserCard({ nombre, email, empresa, rol, id }) {
  const dispatch = useDispatch();

  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      /* dispatch(borrarProd(id)); */
    }
  };

  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      dispatch(deleteUser(id));
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleEditar = () => {
    setShowModal(true);
  };
  console.log(rol);

  return (
    <div className="card">
      <div className="info">
        <>
          <div className="cadaInfo">
            <p className="nombre">
              <b style={{ textDecoration: "underline 2px" }}>Usuario: </b>
              <br></br>
              {nombre}
            </p>
          </div>
          <div className="cadaInfo">
            <p className="categoria">
              <b style={{ textDecoration: "underline 2px" }}>Email: </b>
              <br></br>
              {email}
            </p>
          </div>
          <div className="cadaInfo">
            <p className="categoria">
              <b style={{ textDecoration: "underline 2px" }}>Rol: </b>
              <br></br>
              {rol}
            </p>
          </div>

          <div className="imagenes">
            <button onMouseDown={handleEditar}>
              <img src={editar} alt="editar" />
            </button>

            <button onClick={() => onBlock(id)}>
              <img src={bloqueo} alt="bloqueo" />
            </button>

            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>
          </div>

          <div
            className="modal"
            style={{ display: showModal ? "block" : "none" }}
          >
            <EditarUser
              id={id}
              nombre={nombre}
              email={email}
              rol={rol}
              setShowModal={setShowModal}
            />
          </div>
        </>
      </div>
    </div>
  );
}
