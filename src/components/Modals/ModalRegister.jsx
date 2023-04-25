import React, { useState } from "react";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserActual, postEmpresa } from "../../redux/actions/actions";

export default function ModalRegister({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nombre: "",
    email: "",
    descripcion: "descripcion de la empresa",
    clave: "",
    tipoSuscripcionID: "1",
  });

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input.email, input.clave);
    dispatch(postEmpresa(input)).then(() =>
      dispatch(getUserActual(input.email, input.clave))
    );
    setInput({
      email: "",
      clave: "",
      nombre: "",
      descripcion: "descripcion de la empresa",
      tipoSuscripcionID: "1",
    });
    navigate("/perfil");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Registrarse</h2>
        <div className="info">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>
                Nombre de empresa:
                <input
                  type="text"
                  name="nombre"
                  value={input.nombre}
                  onChange={(e) => handlerChange(e)}
                  autoFocus
                />
              </label>
              <label>
                Correo electrónico:
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => handlerChange(e)}
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  name="clave"
                  value={input.clave.toString()}
                  onChange={(e) => handlerChange(e)}
                />
              </label>
              <div className="suscripciones">
                <div>
                  <h3>Suscripción Mensual</h3>
                  <h1>$$$</h1>
                </div>
                <div>
                  <h3>Suscripción Anual</h3>
                  <h1>$$$</h1>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit">Registrarse</button>
                <button type="button" onClick={onClose}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
          <div className="logo">
            <p>
              Nuestra plataforma permitirá tener un control en tiempo real del
              stock de materiales general y particular de cada obra, gestión de
              pedidos, inventarios, sincronización de stock, control de
              empleados, etc.
            </p>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
