import React, { useState } from "react";
import logo from "../../img/logo.png";

export default function ModalRegister({ onClose }) {
  const [username, setUsername] = useState("");
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
        <h2>Registrarse</h2>
        <div className="info">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>
                Nombre de empresa:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </label>
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
            <img src={logo}></img>
          </div>
        </div>
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
      </div>
    </div>
  );
}
