import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subCategorias);
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
          <button className="inicioBtn">Inicio</button>
        </Link>
        <h2>Creación de Producto</h2>

        {/* creacion de categoría */}
        <form className="formCat">
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
        <form className="formSub">
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
        <form className="formSelect">
          <p>Selecciona una categoría!</p>
          <div className="selectCat">
            {categs?.map((obj) => {
              return (
                <div key={obj.id}>
                  <label
                    className="containerr"
                    htmlFor={obj.nombre}
                    key={obj.id}
                  >
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
          <div className="selectSub">
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
          <div className="createProd">
            <div className="namecodedesc">
              <div className="nameProd">
                <label>Nombre del producto: </label>
                <input type="text" name="title" value={input.title}></input>
              </div>

              <div className="codeProd">
                <label>Código (ej: #3524): </label>
                <input type="text" name="title" value={input.title}></input>
              </div>

              <div className="descProd">
                <label>Descripción: </label>
                <textarea
                  type="text"
                  name="content"
                  cols="20"
                  rows="4"
                  value={input.content}
                ></textarea>
              </div>
            </div>

            <div>
              <button type="submit">Create!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
