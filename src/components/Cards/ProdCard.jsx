import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProd, getDetailDepo } from "../../redux/actions/actions";
import ModalProd from "../Modals/ModalProd";
import modal from "../../img/modal.png";

export default function ProdCard({
  nombre,
  categoria,
  editar,
  subcategoria,
  descripcion,
  codigo,
  shopping,
  borrar,
  cantidad,
  id,
  imagen,
  depositoId,
}) {
  const dispatch = useDispatch();
  const deposito = useSelector((state) => state.detailDepo.resultado);

  useEffect(() => {
    dispatch(getDetailDepo(depositoId));
  }, [dispatch, depositoId]);

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
    deposito && (
      <div className="card">
        <div className="info">
          <div className="cadaInfo">
            <p className="nombre">
              <b style={{ textDecoration: "underline 2px" }}>Producto: </b>
              <br></br>
              {nombre}({codigo})
            </p>
          </div>

          <div className="cadaInfo">
            <p className="categoria">
              <b style={{ textDecoration: "underline 2px" }}>Categoría: </b>
              <br></br>
              {categoria}
            </p>
          </div>

          <div className="cadaInfo">
            <p className="subcategoria">
              <b style={{ textDecoration: "underline 2px" }}>Subcategoría: </b>
              <br></br>
              {subcategoria}
            </p>
          </div>

          <div className="cadaInfo">
            <p className="subcategoria">
              <b style={{ textDecoration: "underline 2px" }}>Cantidad: </b>
              <br></br>
              {cantidad}
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

        <div
          className="modal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <ModalProd
            id={id}
            nombre={nombre}
            categoria={categoria}
            subcategoria={subcategoria}
            cantidad={cantidad}
            descripcion={descripcion}
            codigo={codigo}
            shopping={shopping}
            editar={editar}
            setShowModal={setShowModal}
            imagen={imagen}
            deposito={deposito.nombre}
          />
        </div>
      </div>
    )
  );
}
