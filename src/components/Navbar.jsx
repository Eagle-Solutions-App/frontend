import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo2.png";
import shopping from "../img/shopping.png";
import { allProductos } from "../redux/actions/actions";
import Filtros from "./Filtros";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const dispatch = useDispatch();

  const onCloseSession = () => {
    let res = window.confirm(`Está seguro de querer cerrar su sesión?`);
    if (res === true) {
      /* dispatch(closeSession(id)); */
    }
  };

  const recargaHandler = (e) => {
    dispatch(allProductos());
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="burger" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="logoNav">
        <Link to="/">
          <button onClick={recargaHandler}>
            <img src={logo} alt="logo" />
          </button>
        </Link>
      </div>

      <div className={`searchFilters ${open ? "open" : ""}`}>
        <SearchBar open={open} />
        <Filtros open={open} />
      </div>

      <div className="btns">
        <details className="menu">
          <summary className="menu-summary">
            <i className="fa-regular fa-user fa-xl"></i>
          </summary>
          <div className="menu-content">
            <div className="menu-item">
              <NavLink className="perfilBtn" to="/perfil">
                <button>Perfil</button>
              </NavLink>
              <button onClick={() => onCloseSession()}>Cerrar sesión</button>
            </div>
          </div>
        </details>

        <button className="shopping">
          <img src={shopping} alt="shopping" />
        </button>
      </div>
    </div>
  );
}
