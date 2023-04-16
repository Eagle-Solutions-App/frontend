import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blockEmpresa,
  deleteEmpresa,
  unblockEmpresa,
} from "../../redux/actions/actions";
import modal from "../../img/modal.png";
import ModalEmpresa from "../Modals/ModalEmpresa";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import block from "../../img/bloqueo.png";
import unblock from "../../img/unblock.png";

export default function EmpresaCard({ nombre, email, bloqueo, id }) {
  const dispatch = useDispatch();

  // const [bloqueado, setBloqueado] = useState(bloqueo);
  // console.log(bloqueado);

  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      dispatch(blockEmpresa(id));
      // setBloqueado(true);
    }
  };

  const onUnblock = (id) => {
    let res = window.confirm(
      `Está seguro de querer desbloquear a "${nombre}"?`
    );
    if (res === true) {
      dispatch(unblockEmpresa(id));
      // setBloqueado(false);
    }
  };

  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      dispatch(deleteEmpresa(id));
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleEditar = () => {
    setShowModal(true);
  };

  return (
    <div className="card">
      <div className="info">
        <div className="cadaInfo">
          <p className="nombre">
            <b style={{ textDecoration: "underline 2px" }}>Empresa: </b>
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
        {/* <div className="cadaInfo">
        <p className="categoria">
          <b>Permiso Act: </b>
          ADMIN
        </p>
      </div> */}
      </div>

      {/* <div className="imagenes">
        <button onClick={handleEditar}>
          <img src={modal} alt="modal" />
        </button>

        <button onClick={() => onBlock(id)}>
          <img src={bloqueo} alt="bloqueo" />
        </button>

        <button onClick={() => onClose(id)}>
          <img src={borrar} alt="borrar" />
        </button>
      </div> */}
      <div className="imagenes">
        {bloqueo === false ? (
          <>
            <button onMouseDown={handleEditar}>
              <img src={editar} alt="editar" />
            </button>
            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>
            <button onClick={() => onBlock(id)}>
              <img src={block} alt="bloqueo" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>
            <button onClick={() => onUnblock(id)}>
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
        <ModalEmpresa
          id={id}
          nombre={nombre}
          email={email}
          estadoPago={true}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}
