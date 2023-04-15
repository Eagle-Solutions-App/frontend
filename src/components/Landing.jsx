import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalRegister from "./Modals/ModalRegister"

export default function Landing() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="landCont">
      <div className="landingContainer">
        <div className="wrapper">
          <h1>Eagle Solutions</h1>
          <p>
            EAGLE SOLUTIONS pretende ser una herramienta de gestión para
            empresas de construcción, servicios mineros y distintas actividades
            conexas
          </p>
          <div className="buttonss">
            <NavLink to="/productos">
              <button>Iniciar Sesión</button>
            </NavLink>

            <button onClick={handleOpenModal}>Registrarse</button>
          </div>
        </div>
      </div>
      {showModal && <ModalRegister onClose={handleCloseModal} />}
    </div>
  );
}




