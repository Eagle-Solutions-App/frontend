import React /* useState */ from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import shopping from "../img/shopping.png";
import { allProductos } from "../redux/actions/actions";
import Filtros from "./Filtros";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const dispatch = useDispatch();

  const recargaHandler = (e) => {
    dispatch(allProductos());
  };

  return (
    <div className="nav-container">
      <div className="logoNav">
        <Link to="/productos">
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
        <button className="user">
          <i className="fa-regular fa-user fa-2xl"></i>
        </button>
        <button className="shopping">
          <img src={shopping} alt="shopping" />
        </button>
      </div>
    </div>
  );
}
