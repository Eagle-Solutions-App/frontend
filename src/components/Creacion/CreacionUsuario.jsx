import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRoles, postUser } from "../../redux/actions/actions";
import Navbar from "../Navbar";

export default function CreacionDeposito() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles);

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rolID: "",
    empresaID: 1,
  });

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSelectRol = (e) => {
    if (!input.rolID.includes(e.target.value)) {
      setInput({ ...input, rolID: e.target.value });
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    dispatch(postUser(input));
    alert("Usuario creado con éxito! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      apellido: "",
      email: "",
      rolID: "",
      empresaID: 1,
    });
    navigate("/usuarios");
  };

  return (
    <div className="mainContainer">
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

              <div className="selectCat">
                <select onChange={(e) => handlerSelectRol(e)}>
                  {roles?.map(
                    (rol) =>
                      rol.id !== 1 && (
                        <option value={rol.id} key={rol.id}>
                          {rol.rol}
                        </option>
                      )
                  )}
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
