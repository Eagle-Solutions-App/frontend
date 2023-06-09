import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import { getUserActual, getUsuarios } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function ModalLogin({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  const [input, setInput] = useState({
    email: "",
    clave: "",
  });

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserActual(input.email, input.clave)).then(() =>
      dispatch(getUserActual(input.email, input.clave))
    );

    const userExists = usuarios.find(
      (user) => user.email.toLowerCase() === input.email.toLowerCase()
    );
    if (userExists) {
      dispatch(getUserActual(input.email, input.clave)).then(() =>
        dispatch(getUserActual(input.email, input.clave))
      );

      setInput({
        email: "",
        clave: "",
      });
      navigate("/perfil");
    } else {
      // Si el correo electrónico no existe, mostrar un mensaje de error
      alert("El correo electrónico ingresado no está registrado.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Iniciar Sesión</h2>
        <div className="info">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>
                Correo electrónico:
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => handlerChange(e)}
                  required
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  name="clave"
                  value={input.clave}
                  onChange={(e) => handlerChange(e)}
                  required
                />
              </label>
              <div className="modal-footer">
                <button type="submit">Iniciar Sesión</button>
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
