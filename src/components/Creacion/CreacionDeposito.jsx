import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDeposito, getTipos } from "../../redux/actions/actions";
import Navbar from "../Navbar";
// import { Deposito } from "../../../../backend/src/models/Deposito";

export default function CreacionDeposito() {
  const tipos = useSelector((state) => state.tipos);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  }, [dispatch]);

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
    dispatch(postDeposito(input));
    alert("Depósito creado con éxito! Se lo redirigirá al inicio...");
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
    <div className="mainContainer">
      <Navbar />
      <div className="container">
        <h2>Creación de Depósito</h2>

        <form className="formSelect" onSubmit={(e) => handlerSubmitForm(e)}>
          <p>Selecciona una tipo de Deposito!</p>
          <div className="selectSub">
            <div className="check">
              {tipos?.map((tipo) => {
                return (
                  <div key={tipo.id}>
                    <label htmlFor={tipo.tipo} key={tipo.id}>
                      {tipo.tipo}

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
          </div>

          <div className="createProd">
            <div className="namecodedesc">
              <div className="nameProd">
                <label>Nombre: </label>
                <input
                  type="text"
                  name="nombre"
                  value={input.nombre}
                  required
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Calle: </label>
                <input
                  type="text"
                  name="calle"
                  value={input.calle}
                  required
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>
              <div className="codeProd">
                <label>Altura: </label>
                <input
                  type="text"
                  name="altura"
                  value={input.altura}
                  required
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Ciudad: </label>
                <input
                  type="text"
                  name="ciudad"
                  value={input.ciudad}
                  required
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Provincia: </label>
                <input
                  type="text"
                  name="provincia"
                  value={input.provincia}
                  required
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>País: </label>
                <input
                  type="text"
                  name="pais"
                  value={input.pais}
                  required
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
                  value={input.descripcion}
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
                  value={input.observaciones}
                  onChange={(e) => handlerChange(e)}
                ></textarea>
              </div>
            </div>

            <div className="createSubmit">
              <button type="submit">Crear Depósito</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
