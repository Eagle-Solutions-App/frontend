import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function EditarProducto() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Home</button>
        </Link>
        <h1>Editar Producto</h1>
      </div>
    </div>
  );
}
