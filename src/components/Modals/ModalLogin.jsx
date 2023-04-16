import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function ModalLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica de registro
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="modal-footer">
                <Link to="/productos">
                  <button type="submit">Iniciar Sesión</button>
                </Link>
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
