import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getCategorias, postProd } from "../redux/actions/actions";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subcategoria: "",
    descripcion: "",
    codigo: "",
  });

  /*   const [nombreCateg, setNombreCateg] = useState("");*/
  /*  const [nombreSubC, setNombreSubC] = useState(""); */

  /*   useEffect(() => {
    dispatch(getCategorias());
  }, [dispatch]); */

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSelectCateg = (e) => {
    if (!input.subcategoria.includes(e.target.value)) {
      setInput({
        ...input,
        subcategoria: [...input.subcategoria, e.target.value],
      });
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postProd(input));
    alert("Producto creado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      categoria: "",
      subcategora: "",
      descripcion: "",
      codigo: "",
    });
    navigate("/");
  };

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
        <form className="formSelect" onSubmit={(e) => handlerSubmitForm(e)}>
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
                        onChange={(e) => handlerSelectCateg(e)}
                      />
                      <button value={obj.id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
            <select onChange={(e) => handlerSelectCateg(e)}>
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
                <input
                  type="text"
                  name="nombre"
                  value={input.nombre}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="codeProd">
                <label>Código (ej: #3524): </label>
                <input
                  type="text"
                  name="codigo"
                  value={input.codigo}
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="descProd">
                <label>Descripción: </label>
                <textarea
                  type="text"
                  name="descripcion"
                  cols="20"
                  rows="4"
                  value={input.descripcion}
                  onChange={(e) => handlerChange(e)}
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
