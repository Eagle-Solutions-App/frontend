import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProd } from "../../redux/actions/actions";
import ModalProd from "../Modals/ModalProd";
import modal from "../../img/modal.png";

export default function UserCard({
  nombre,
  categoria,
  editar,
  subcategoria,
  descripcion,
  codigo,
  shopping,
  borrar,
  id,
}) {
  const dispatch = useDispatch();

  const onClose = (id) => {
    let res = window.confirm(`Está seguro de querer borrar "${nombre}"?`);
    if (res === true) {
      dispatch(deleteProd(id));
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
              <b>Producto: </b>
              {nombre}({codigo})
            </p>
          </div>

          <div className="cadaInfo">
            <p className="categoria">
              <b>Categoría: </b>
              {categoria || "Bien de Uso"}
            </p>
          </div>

          <div className="cadaInfo">
            <p className="subcategoria">
              <b>Subcategoría: </b>
              {subcategoria || "Materiales"}
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
            <ModalProd
              id={id}
              nombre={nombre}
              subcategoria={subcategoria}
              descripcion={descripcion}
              codigo={codigo}
              shopping={shopping}
              editar={editar}
              setShowModal={setShowModal}
            />
          </div>
        </>
      </div>
    </div>
  );
}
