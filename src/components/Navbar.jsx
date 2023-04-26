import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo2.png";
import shopping from "../img/shopping.png";
import { allProductos, cleanUserActual } from "../redux/actions/actions";
import Filtros from "./Filtros";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userActual = useSelector((state) => state.userActual);

  const onCloseSession = () => {
    let res = window.confirm(`Está seguro de querer cerrar su sesión?`);
    if (res === true) {
      dispatch(cleanUserActual(userActual.id));
    }
    navigate("/");
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
        <Link to="/productos">
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

        <Link className="perfilBtn" to="/carrito">
          <button className="shopping">
            <img src={shopping} alt="shopping" />
          </button>
        </Link>
      </div>
    </div>
  );
}
