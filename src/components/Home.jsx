import React, { useEffect } from "react";
import Card from "./Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar.jsx";
import { getProductos } from "../redux/actions/actions.js";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  let todosLosProds = useSelector((state) => state.productosHome);

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Bienvenido! Usted es Responsable de Compra</h2>

        <Link to="/producto" style={{ textDecoration: "none" }}>
          <button>Crear Producto</button>
        </Link>

        <div className="cards">
          {todosLosProds.map((card) => (
            <div key={card.id}>
              <Card
                nombre={card.nombre}
                categoria={card.categoria}
                subcategoria={card.subcategoria}
                id={card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
