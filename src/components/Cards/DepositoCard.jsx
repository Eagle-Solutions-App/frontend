import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDepo } from "../../redux/actions/actions";
import ModalDepo from "../Modals/ModalDepo";
import modal from "../../img/modal.png";

export default function DepositoCard({
  nombre,
  pais,
  editar,
  ciudad,
  provincia,
  borrar,
  calle,
  altura,
  descripcion,
  id,
}) {
  const dispatch = useDispatch();

  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      dispatch(deleteDepo(id));
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
              <b>Nombre: </b>
              {nombre}
            </p>
          </div>
          <div className="cadaInfo">
            <p className="categoria">
              <b>País: </b>
              {pais}
            </p>
          </div>
          <div className="cadaInfo">
            <p className="categoria">
              <b>Ciudad: </b>
              {ciudad}
            </p>
          </div>
          <div className="imagenes">
            <button onClick={() => onClose(id)}>
              <img src={borrar} alt="borrar" />
            </button>

            <button onClick={handleEditar}>
              <img src={modal} alt="modal" />
            </button>
          </div>

          <div
            className="modal"
            style={{ display: showModal ? "block" : "none" }}
          >
            <ModalDepo
              id={id}
              nombre={nombre}
              pais={pais}
              ciudad={ciudad}
              calle={calle}
              altura={altura}
              provincia={provincia}
              editar={editar}
              descripcion={descripcion}
              setShowModal={setShowModal}
            />
          </div>
        </>
      </div>
    </div>
  );
}
