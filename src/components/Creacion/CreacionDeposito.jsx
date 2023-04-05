import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProd } from "../../redux/actions/actions";
import Navbar from "../Navbar";

export default function CreacionDeposito() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    direccion: "",
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
    dispatch(postProd(input));
    alert("Depósito creado con éxito! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      direccion: "",
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
                <label>Nombre del depósito: </label>
                <input
                  type="text"
                  name="nombre"
                  value={input.nombre}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Dirección (ej: Igualdad 2532): </label>
                <input
                  type="text"
                  name="direccion"
                  value={input.direccion}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Ciudad: </label>
                <input
                  type="text"
                  name="ciudad"
                  value={input.ciudad}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Provincia: </label>
                <input
                  type="text"
                  name="provincia"
                  value={input.provincia}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>País: </label>
                <input
                  type="text"
                  name="pais"
                  value={input.pais}
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
