import React from "react";
import logo from "../img/logo.png";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={logo} alt="logo" />
      <SearchBar />
    </div>
  );
}
