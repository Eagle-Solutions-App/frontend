import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const categs = useSelector((state) => state.categorias);
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subCategoria: "",
    descripcion: "",
  });

  const [nombreC, setNombreC] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Home</button>
        </Link>
        <h2>Creación de Producto</h2>

        {/* creacion de categoría */}
        <form>
          <div>
            <label>New Category: </label>
            <input type="text" name="nombre" value={nombreC}></input>

            <div>
              <button type="submit" disabled={!nombreC}>
                Create category!
              </button>
            </div>
          </div>
        </form>

        {/* creacion de producto */}
        <form>
          <p>Select one category!</p>
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

          <div>
            <label>Title: </label>
            <input type="text" name="title" value={input.title}></input>
          </div>

          <div>
            <label>Content: </label>
            <textarea
              type="text"
              name="content"
              value={input.content}
            ></textarea>
          </div>

          <div>
            <button type="submit">Create!</button>
          </div>
        </form>
      </div>
    </div>
  );
}
