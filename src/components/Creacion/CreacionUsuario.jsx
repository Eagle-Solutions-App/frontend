import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../redux/actions/actions";
import Navbar from "../Navbar";

export default function CreacionDeposito() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.roles);

  const numeroAleatorio = Math.floor(Math.random() * Math.pow(10, 5))
    .toString()
    .padStart(5, "0");

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    clave: numeroAleatorio,
  });

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSelectRol = (e) => {
    if (!input.rol.includes(e.target.value)) {
      setInput({ ...input, rol: e.target.value });
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postUser(input));
    alert("Usuario creado con éxito! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      apellido: "",
      email: "",
      rol: "",
    });
    navigate("/usuarios");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Creación de Usuario</h2>

        <form className="formSelect" onSubmit={(e) => handlerSubmitForm(e)}>
          <div className="createProd">
            <div className="namecodedesc">
              <div className="nameProd">
                <label>Nombre: </label>
                <input
                  type="text"
                  name="nombre"
                  value={input.nombre}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Apellido: </label>
                <input
                  type="text"
                  name="apellido"
                  value={input.direccion}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  value={input.ciudad}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div>
                <select onSubmit={(e) => handlerSelectRol(e)}>
                  {rol?.map((obj, i) => {
                    return (
                      <option value={obj} key={i}>
                        {obj}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="createSubmit">
              <button type="submit">Crear Usuario</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
