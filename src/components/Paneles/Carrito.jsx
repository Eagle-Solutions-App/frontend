import React, { useEffect } from "react";
import Navbar from "../Navbar";
import PedidoCard from "../Cards/PedidoCard";
import { useDispatch, useSelector } from "react-redux";
import { getCateg, getProductos } from "../../redux/actions/actions";
import shopping from "../../img/shopping.png";

export default function Carrito() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  let categorias = useSelector((state) => state.categorias);

  useEffect(() => {
    dispatch(getProductos());
    dispatch(getCateg());
  }, [dispatch]);

  return (
    <div className="carritoContainer">
      <Navbar />
      <div className="carritoPanel">
        <h2>Carrito de pedidos</h2>
        <div className="cards">
          {productos.length &&
            categorias.length &&
            productos.map((card) => (
              <div key={card.id}>
                <PedidoCard
                  nombre={card.nombre}
                  categoria={
                    categorias[0].Subcategoria[0].id === card.Subcategorium.id
                      ? categorias[0].nombre
                      : categorias[1].nombre
                  }
                  subcategoria={card.Subcategorium.nombre}
                  descripcion={card.descripcion}
                  codigo={card.codigo}
                  cantidad={card.cantidad}
                  id={card.id}
                  shopping={shopping}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
