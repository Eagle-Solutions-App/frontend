import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
  getDetailDepo,
  getTipos,
  updateDepo,
} from "../../redux/actions/actions";

export default function CreacionProducto() {
  const tipos = useSelector((state) => state.tipos);
  const detailDepo = useSelector((state) => state.detailDepo.resultado);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [input, setInput] = useState({
    nombre: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "",
    descripcion: "",
    observaciones: "",
    tipoDepositoID: "",
    empresaID: 1,
  });

  useEffect(() => {
    dispatch(getTipos());
    dispatch(getDetailDepo(id));
  }, [dispatch, id]);

  const handlerSelectTipo = (e) => {
    if (!input.tipoDepositoID.includes(e.target.value)) {
      setInput({
        ...input,
        tipoDepositoID: e.target.value,
      });
    }
  };

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
      calle: "",
      altura: "",
      ciudad: "",
      provincia: "",
      pais: "",
      descripcion: "",
      observaciones: "",
      tipoDepositoID: "",
      empresaID: 1,
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
              <p>Selecciona una tipo de Deposito!</p>

              <div className="check">
                {tipos?.map((tipo) => {
                  return (
                    <div key={tipo.id}>
                      <label htmlFor={tipo.tipo} key={tipo.id}>
                        <span>{tipo.tipo}</span>

                        <input
                          type="radio"
                          name="tipo"
                          id={tipo.id}
                          value={tipo.id}
                          onChange={(e) => handlerSelectTipo(e)}
                        />
                      </label>
                    </div>
                  );
                })}
              </div>

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
