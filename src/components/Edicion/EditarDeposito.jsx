import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { getDetailDepo, updateDepo } from "../../redux/actions/actions";

export default function CreacionProducto() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailDepo = useSelector((state) => state.detailDepo.resultado);

  const { id } = useParams();

  const [input, setInput] = useState({
    id,
    nombre: "",
    pais: "",
    ciudad: "",
    provincia: "",
    calle: "",
    altura: "",
    descripcion: "",
    observaciones: "",
  });

  useEffect(() => {
    dispatch(getDetailDepo(id));
  }, [dispatch, id]);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateDepo(input, id));
    alert("Depósito editado exitosamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      pais: "",
      ciudad: "",
      provincia: "",
      calle: "",
      altura: "",
      descripcion: "",
      observaciones: "",
    });
    navigate("/depositos");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {detailDepo && (
          <>
            <h2>Editando: {detailDepo.nombre}</h2>

            <form className="formEdit" onSubmit={(e) => handlerSubmitForm(e)}>
              {/* edición del deposito */}
              <div className="editDepo">
                <div className="namecodedesc">
                  <div className="nameDepo">
                    <label>Nombre: </label>
                    <input
                      type="text"
                      name="nombre"
                      value={[input.nombre || detailDepo.nombre]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="nameDepo">
                    <label>País: </label>
                    <input
                      type="text"
                      name="pais"
                      value={[input.pais || detailDepo.pais]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="nameDepo">
                    <label>Provincia: </label>
                    <input
                      type="text"
                      name="provincia"
                      value={[input.provincia || detailDepo.provincia]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="nameDepo">
                    <label>Ciudad: </label>
                    <input
                      type="text"
                      name="ciudad"
                      value={[input.ciudad || detailDepo.ciudad]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="nameDepo">
                    <label>Calle: </label>
                    <input
                      type="text"
                      name="calle"
                      value={[input.calle || detailDepo.calle]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="nameDepo">
                    <label>Altura: </label>
                    <input
                      type="text"
                      name="altura"
                      value={[input.altura || detailDepo.altura]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="descProd">
                    <label>Descripción: </label>
                    <textarea
                      type="text"
                      name="descripcion"
                      cols="20"
                      rows="4"
                      value={input.descripcion || detailDepo.descripcion}
                      onChange={(e) => handlerChange(e)}
                    ></textarea>
                  </div>

                  <div className="obsProd">
                    <label>Observaciones: </label>
                    <textarea
                      type="text"
                      name="observaciones"
                      cols="20"
                      rows="4"
                      value={input.observaciones || detailDepo.observaciones}
                      onChange={(e) => handlerChange(e)}
                    ></textarea>
                  </div>

                  {/* <div className="descProd">
                    <label>Descripción: </label>
                    <textarea
                      type="text"
                      name="descripcion"
                      value={[input.descripcion || detailDepo.descripcion]}
                      onChange={(e) => handlerChange(e)}
                    ></textarea>
                  </div> */}
                </div>

                <div className="editSubmit">
                  <button type="submit">Actualizar Producto!</button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
