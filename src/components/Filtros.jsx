import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  /* allProductos, */
  searchXcategoria,
  searchXsubcategoria,
  searchXrol,
  searchXtipo,
  getCateg,
  getSubcategs,
  getTipos,
} from "../redux/actions/actions";

import { Link, useLocation } from "react-router-dom";

export default function Filtros({ open }) {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);
  const roles = useSelector((state) => state.roles);
  const tipos = useSelector((state) => state.tipos);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCateg());
    dispatch(getSubcategs());
    dispatch(getTipos());
  }, [dispatch]);

  const fn = (e) => {
    dispatch(searchXcategoria(e.target.value));
  };

  const fn2 = (e) => {
    dispatch(searchXsubcategoria(e.target.value));
  };

  const fn3 = (e) => {
    dispatch(searchXrol(e.target.value));
  };

  const fn4 = (e) => {
    dispatch(searchXtipo(e.target.value));
    console.log(e.target.value);
  };

  /* const recargaHandler = (e) => {
    dispatch(allProductos());
  }; */

  return (
    <div className={`filtCont ${open ? "open" : ""}`}>
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

      {/* <button onClick={(e) => recargaHandler(e)}>
        Recargar Todos los Productos
      </button> */}

      {/* FILTROS DE USUARIOS */}
      {location.pathname === "/usuarios" ? (
        <>
          <div className="select-container">
            <select className="select-box" onChange={(e) => fn3(e)}>
              <option hidden>Roles</option>
              <option value="todos">Todos</option>
              {roles?.map((r) => {
                return (
                  <option value={r.rol} key={r.id}>
                    {r.rol}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      ) : (
        ""
      )}

      {/* FILTROS DE DEPOSITOS */}
      {location.pathname === "/depositos" ? (
        <>
          <div className="select-container">
            <select className="select-box" onChange={(e) => fn4(e)}>
              <option hidden>Tipo de Deposito</option>
              <option value="todos">Todos</option>
              {tipos?.map((r) => {
                return (
                  <option value={r.tipo} key={r.id}>
                    {r.tipo}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      ) : (
        ""
      )}

      {/* FILTROS DE PRODUCTOS */}
      {location.pathname === "/productos" ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
}
