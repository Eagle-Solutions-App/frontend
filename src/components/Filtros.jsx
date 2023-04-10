import React from "react";
import { useSelector } from "react-redux";
import {
  allProductos,
  searchXcategoria,
  searchXsubcategoria,
} from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Filtros() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);

  const dispatch = useDispatch();

  const fn = (e) => {
    dispatch(searchXcategoria(e.target.value));
  };

  const fn2 = (e) => {
    dispatch(searchXsubcategoria(e.target.value));
  };

  const recargaHandler = (e) => {
    dispatch(allProductos());
  };

  return (
    <div className="filtCont">
      <Link to="/usuarios">
        <button>Panel de Usuarios</button>
      </Link>

      <Link to="/depositos">
        <button>Panel de Depósitos</button>
      </Link>

      <Link to="/productos">
        <button>Panel de Productos</button>
      </Link>

      <Link to="/empresas">
        <button>Panel de Empresas</button>
      </Link>

      <button onClick={(e) => recargaHandler(e)}>
        Recargar Todos los Productos
      </button>

      <div className="select-container">
        <select className="select-box" onChange={(e) => fn(e)}>
          <option hidden>Categorias</option>
          <option value="todas">Todas</option>
          {categs?.map((c) => {
            return (
              <option value={c.nombre} key={c.id}>
                {c.nombre}
              </option>
            );
          })}
        </select>
      </div>

      <div className="select-container">
        <select className="select-box" onChange={(e) => fn2(e)}>
          <option hidden>Subcategorías</option>
          <option value="todas">Todas</option>
          {subCategs?.map((c) => {
            return (
              <option value={c.nombre} key={c.id}>
                {c.nombre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
