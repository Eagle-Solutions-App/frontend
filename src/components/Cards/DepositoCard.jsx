import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDepo, getDepositos } from "../../redux/actions/actions";
import ModalDepo from "../Modals/ModalDepo";
import modal from "../../img/modal.png";
import maquinaria from "../../img/maquinaria.png";
import material from "../../img/materiales.png";
import vehiculo from "../../img/vehiculos.png";

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
  tipo,
  observaciones,
  productos,
}) {
  const dispatch = useDispatch();

  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      dispatch(deleteDepo(id)).then(() => dispatch(getDepositos()));
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
          {/* <p className="categoria">
            <b style={{ textDecoration: "underline 2px" }}>Tipo: </b>
            <br></br>
            {tipo}
          </p> */}
          {tipo === "Maquinaria" ? (
            <img className="tipoDepo" src={maquinaria} alt="maquinaria"></img>
          ) : (
            ""
          )}
          {tipo === "Material" ? (
            <img className="tipoDepo" src={material} alt="material"></img>
          ) : (
            ""
          )}
          {tipo === "Vehiculo" ? (
            <img className="tipoDepo" src={vehiculo} alt="vehiculo"></img>
          ) : (
            ""
          )}
        </div>
        <div className="cadaInfo">
          <p className="nombre">
            <b style={{ textDecoration: "underline 2px" }}>Nombre: </b>
            <br></br>
            {nombre}
          </p>
        </div>
        <div className="cadaInfo">
          <p className="categoria">
            <b style={{ textDecoration: "underline 2px" }}>País: </b>
            <br></br>
            {pais}
          </p>
        </div>
        <div className="cadaInfo">
          <p className="categoria">
            <b style={{ textDecoration: "underline 2px" }}>Ciudad: </b>
            <br></br>
            {ciudad}
          </p>
        </div>
      </div>

      <div className="imagenes">
        <button onClick={() => onClose(id)}>
          <img src={borrar} alt="borrar" />
        </button>

        <button onClick={handleEditar}>
          <img src={modal} alt="modal" />
        </button>
      </div>

      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
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
          observaciones={observaciones}
          setShowModal={setShowModal}
          productos={productos}
        />
      </div>
    </div>
  );
}
