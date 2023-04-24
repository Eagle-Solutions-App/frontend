import React, { useState } from "react";
import ModalRegister from "./Modals/ModalRegister";
import ModalLogin from "./Modals/ModalLogin";
import logo from "../img/logo2.png";

export default function Landing() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const handleOpenModalRegister = () => {
    setShowModalRegister(true);
  };

  const handleOpenModalLogin = () => {
    setShowModalLogin(true);
  };

  const handleCloseModal = () => {
    setShowModalLogin(false);
    setShowModalRegister(false);
  };

  return (
    <div className="landCont">
      <img className="imgLand" src={logo} alt="logo" />
      <div className="landingContainer">
        <div className="wrapper">
          <h1>Eagle Solutions</h1>
          <p>
            EAGLE SOLUTIONS pretende ser una herramienta de gestión para
            empresas de construcción, servicios mineros y distintas actividades
            conexas
          </p>
          <div className="buttonss">
            <button onClick={handleOpenModalLogin}>Iniciar Sesión</button>
            <button onClick={handleOpenModalRegister}>Registrarse</button>
          </div>
        </div>
      </div>
      {showModalLogin && <ModalLogin onClose={handleCloseModal} />}
      {showModalRegister && <ModalRegister onClose={handleCloseModal} />}
    </div>
  );
}
