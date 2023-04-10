import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDeposito } from "../../redux/actions/actions";
import Navbar from "../Navbar";

export default function CreacionDeposito() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    calle: "",
    altura: "",
    ciudad: "",
    provincia: "",
    pais: "",
  });

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
    });
    navigate("/depositos");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Creación de Depósito</h2>

        <form className="formSelect" onSubmit={(e) => handlerSubmitForm(e)}>
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
