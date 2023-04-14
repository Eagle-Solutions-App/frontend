import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
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

  return (
    <div className="nav-container">
      <div className="logoNav">
        <Link to="/">
          <button onClick={recargaHandler}>
            <img src={logo} alt="logo" />
          </button>
        </Link>
      </div>

      <div className="searchFilters">
        <SearchBar />
        <Filtros />
      </div>

      <div className="btns">
        {/* <button className="user">
          <i className="fa-regular fa-user fa-2xl"></i>
        </button> */}

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
