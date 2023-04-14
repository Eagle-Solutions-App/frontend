import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  blockEmpresa,
  deleteUser,
  /*  unblockEmpresa, */
} from "../../redux/actions/actions";
import modal from "../../img/modal.png";
import ModalEmpresa from "../Modals/ModalEmpresa";

export default function EmpresaCard({ nombre, email, bloqueo, borrar, id }) {
  const dispatch = useDispatch();

  const onBlock = (id) => {
    let res = window.confirm(`Está seguro de querer bloquear a "${nombre}"?`);
    if (res === true) {
      dispatch(blockEmpresa(id));
    }
  };

  /* const onUnblock = (id) => {
    let res = window.confirm(
      `Está seguro de querer desbloquear a "${nombre}"?`
    );
    if (res === true) {
      dispatch(unblockEmpresa(id));
    }
  }; */

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

  return (
    <div className="card">
      <div className="info">
        <>
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

          <div className="imagenes">
            <button onClick={handleEditar}>
              <img src={modal} alt="modal" />
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
            <ModalEmpresa
              id={id}
              nombre={nombre}
              email={email}
              estadoPago={true}
              setShowModal={setShowModal}
            />
          </div>
        </>
      </div>
    </div>
  );
}
