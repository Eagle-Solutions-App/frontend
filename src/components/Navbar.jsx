import React /* useState */ from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import shopping from "../img/shopping.png";
import Filtros from "./Filtros";
import SearchBar from "./SearchBar";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons"; */

export default function Navbar() {
  /* const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; */
  return (
    <div className="nav-container">
      <div className="logoNav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" />
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
