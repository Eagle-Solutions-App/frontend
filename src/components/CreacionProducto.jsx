import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorias } from "../redux/actions/actions";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subCategoria: "",
    descripcion: "",
  });

  useEffect(() => {
    dispatch(getCategorias());
  }, [dispatch]);

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
        {/* <form className="formCat">
          <div>
            <label>Nueva Categoría: </label>
            <input type="text" name="nombre" value={nombreCateg}></input>

            <div>
              <button type="submit" disabled={!nombreCateg}>
                Crear categoría!
              </button>
            </div>
          </div>
        </form> */}

        {/* creación de subcategoría */}
        {/*  <form className="formSub">
          <div>
            <label>Nueva Subcategoría: </label>
            <input type="text" name="nombre" value={nombreSubC}></input>

            <div>
              <button type="submit" disabled={!nombreSubC}>
                Crear Subcategoría!
              </button>
            </div>
          </div>
        </form> */}

        {/* selección de categoría */}
        <form className="formSelect">
          {/* <p>Selecciona una categoría!</p>
          <div className="selectCat">
            {categs?.map((obj) => {
              return (
                <div key={obj[0].id}>
                  <label
                    className="containerr"
                    htmlFor={obj[0].nombre}
                    key={obj[0].id}
                  >
                    {obj[0].nombre}
                    <div>
                      <input
                        type="checkbox"
                        name="categ"
                        id={obj[0].id}
                        value={obj[0].nombre}
                      />

                      <button value={obj[0].id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
          </div> */}

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
                        value={[obj.nombre]}
                      />
                      <button value={obj.id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
            <select>
              {subCategs?.map((obj) => {
                return (
                  <option value={obj.nombre} key={obj.id}>
                    {obj.nombre}
                  </option>
                );
              })}
            </select>
          </div>

          {/* creación del producto */}
          <div className="createProd">
            <div className="namecodedesc">
              <div className="nameProd">
                <label>Nombre del producto: </label>
                <input type="text" name="title" value={input.nombre}></input>
              </div>

              <div className="codeProd">
                <label>Código (ej: #3524): </label>
                <input type="text" name="title" value={input.codigo}></input>
              </div>

              <div className="descProd">
                <label>Descripción: </label>
                <textarea
                  type="text"
                  name="content"
                  cols="20"
                  rows="4"
                  value={input.descripcion}
                ></textarea>
              </div>
            </div>

            <div className="createSubmit">
              <button type="submit">Crear Producto</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
