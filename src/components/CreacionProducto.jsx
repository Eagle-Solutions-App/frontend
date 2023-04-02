import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subCategoria: "",
    descripcion: "",
  });

  const [nombreCateg, setNombreCateg] = useState("");
  const [nombreSubC, setNombreSubC] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Inicio</button>
        </Link>
        <h2>Creación de Producto</h2>

        {/* creacion de categoría */}
        <form>
          <div>
            <label>Nueva Categoría: </label>
            <input type="text" name="nombre" value={nombreCateg}></input>

            <div>
              <button type="submit" disabled={!nombreCateg}>
                Crear categoría!
              </button>
            </div>
          </div>
        </form>

        {/* creación de subcategoría */}
        <form>
          <div>
            <label>Nueva Subcategoría: </label>
            <input type="text" name="nombre" value={nombreSubC}></input>

            <div>
              <button type="submit" disabled={!nombreSubC}>
                Crear Subcategoría!
              </button>
            </div>
          </div>
        </form>

        {/* selección de categoría */}
        <form>
          <p>Selecciona una categoría!</p>
          <div>
            {categs?.map((obj) => {
              return (
                <div key={obj.id}>
                  <label htmlFor={obj.nombre} key={obj.id}>
                    {obj.nombre}
                    <div>
                      <input
                        type="checkbox"
                        name="categ"
                        id={obj.id}
                        value={obj.nombre}
                      />
                      <button value={obj.id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>

          {/* selección de subcategoría */}
          <p>Selecciona una Subcategoría!</p>
          <div>
            {subCategs?.map((obj) => {
              return (
                <div key={obj.id}>
                  <label htmlFor={obj.nombre} key={obj.id}>
                    {obj.nombre}
                    <div>
                      <input
                        type="checkbox"
                        name="subCateg"
                        id={obj.id}
                        value={obj.nombre}
                      />
                      <button value={obj.id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>

          {/* creación del producto */}
          <div>
            <label>Nombre del producto: </label>
            <input type="text" name="nombre" value={input.nombre}></input>
            <br></br>
            <label>Código (ej: #3524): </label>
            <input type="text" name="codigo" value={input.codigo}></input>
          </div>

          <div>
            <label>Descripción: </label>
            <textarea
              type="text"
              name="content"
              value={input.descripcion}
            ></textarea>
          </div>

          <div>
            <button type="submit">Crear Producto!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
