import React from "react";
import { useSelector } from "react-redux";

export default function Filtros() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);

  return (
    <div>
      <button>Recargar Todos los Productos</button>
      <select id="fn">
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
      <select>
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
  );
}
