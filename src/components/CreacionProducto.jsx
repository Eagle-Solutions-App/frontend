import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Home</button>
        </Link>
        <h2>Creación de Producto</h2>
      </div>
    </div>
  );
}
