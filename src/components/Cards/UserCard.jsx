import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  blockUsuario,
  unblockUsuario,
} from "../../redux/actions/actions";
import EditarUser from "../Edicion/EditarUser";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import block from "../../img/bloqueo.png";
import unblock from "../../img/unblock.png";

export default function UserCard({ nombre, email, empresa, rol, id, bloqueo }) {
  const dispatch = useDispatch();

  const [bloqueado, setBloqueado] = useState(bloqueo);
  console.log(bloqueado);

  const onBlock = (id, bloqueo, nombre) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      dispatch(blockUsuario({ bloqueo: "true" }, id));
    }
  };

  const onUnblock = (id, bloqueo, nombre) => {
    let res = window.confirm(
      `Está seguro de querer desbloquear a "${nombre}"?`
    );
    if (res === true) {
      dispatch(unblockUsuario({ bloqueo: "false" }, id));
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
      </div>
      <div className="imagenes">
        {!bloqueo ? (
          <>
            <button onMouseDown={handleEditar}>
              <img src={editar} alt="editar" />
            </button>
            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>
            <button onClick={() => onBlock(id, bloqueo, nombre)}>
              <img src={block} alt="bloqueo" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>
            <button onClick={() => onUnblock(id, bloqueo, nombre)}>
              <img
                style={{ width: "45px", height: "45px" }}
                src={unblock}
                alt="unblock"
              />
            </button>
          </>
        )}
      </div>

      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <EditarUser
          id={id}
          nombre={nombre}
          email={email}
          rol={rol}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}
