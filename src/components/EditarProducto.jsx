import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";

export default function CreacionProducto() {
  const dispatch = useDispatch();
  const categs = useSelector((state) => state.categorias);
  const subCategs = useSelector((state) => state.subcategorias);

  const detail = useSelector((state) => state.detail);

  const { id } = useParams();

  const [input, setInput] = useState({
    id,
    nombre: "",
    categoria: "",
    subcategoria: "",
    codigo: "",
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

        {
          <>
            <h2>Editando: {detail[0].nombre}</h2>
            <div>
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

              {/* edición de categoría */}
              <form>
                {detail[0].categoria ? (
                  <p>{`Categoría previa: ${detail[0].categoria}`}</p>
                ) : (
                  <p>Sin categoría previa! Seleccione una:</p>
                )}
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
                              value={[obj.nombre || detail[0].categoria]}
                            />
                            <button value={obj.id}>x</button>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* edición de subcategoría */}
                {detail[0].subcategoria ? (
                  <p>{`Subcategoría previa: ${detail[0].subcategoria}`}</p>
                ) : (
                  <p>Sin subcategoría previa! Seleccione una:</p>
                )}
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
                              value={[obj.nombre || detail[0].subcategoria]}
                            />
                            <button value={obj.id}>x</button>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* edición del producto */}
                <div>
                  <label>Nombre del producto: </label>
                  <input
                    type="text"
                    name="nombre"
                    value={[input.nombre || detail[0].nombre]}
                  ></input>
                  <br></br>
                  <label>Código (ej: #3524): </label>
                  <input
                    type="text"
                    name="codigo"
                    value={[input.codigo || detail[0].codigo]}
                  ></input>
                </div>

                <div>
                  <label>Descripción: </label>
                  <textarea
                    type="text"
                    name="descripcion"
                    value={[input.descripcion || detail[0].descripcion]}
                  ></textarea>
                </div>

                <div>
                  <button type="submit">Actualizar Producto!</button>
                </div>
              </form>
            </div>
          </>
        }
      </div>
    </div>
  );
}
