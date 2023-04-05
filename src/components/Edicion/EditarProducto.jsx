import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { getDetail, updateProd } from "../../redux/actions/actions";

export default function CreacionProducto() {
  /*  const categs = useSelector((state) => state.categorias); */
  const subCategs = useSelector((state) => state.subcategorias);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail.resultado);

  const { id } = useParams();

  const [input, setInput] = useState({
    id,
    nombre: "",
    categoria: "",
    subcategoria: "",
    codigo: "",
    descripcion: "",
  });

  /*   const [nombreCateg, setNombreCateg] = useState("");
  const [nombreSubC, setNombreSubC] = useState(""); */

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

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
    dispatch(updateProd(input, id));
    alert("Producto editado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      categoria: "",
      subcategora: "",
      descripcion: "",
      codigo: "",
    });
    navigate("/");
  };

  console.log(detail);

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <button className="inicioBtn2">Inicio</button>
        </Link> */}

        {detail && (
          <>
            <h2>Editando: {detail.nombre}</h2>

            {/* creacion de categoría */}
            {/* <form className="formCat2">
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

       
        <form className="formSub2">
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

            {/* edición de categoría */}
            <form className="formEdit" onSubmit={(e) => handlerSubmitForm(e)}>
              {/* {detail.categoria ? (
            <p>{`Categoría previa: ${detail.categoria}`}</p>
          ) : (
            <p>Sin categoría previa! Seleccione una:</p>
          )}
          <div className="editCat">
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
                        value={[obj.nombre || detail.categoria]}
                      />
                      <button value={obj.id}>x</button>
                    </div>
                  </label>
                </div>
              );
            })}
          </div> */}

              {/* edición de subcategoría */}
              {detail.subcategoria ? (
                <p>{`Subcategoría previa: ${detail.subcategoria}`}</p>
              ) : (
                <p>Sin subcategoría previa! Seleccione una:</p>
              )}
              <div className="editSub">
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
                            value={[obj.nombre || detail.subcategoria]}
                            onChange={(e) => handlerSelectCateg(e)}
                          />
                          <button value={obj.id}>x</button>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>

              {/* edición del producto */}
              <div className="editProd">
                <div className="namecodedesc">
                  <div className="nameProd">
                    <label>Nombre del producto: </label>
                    <input
                      type="text"
                      name="nombre"
                      value={[input.nombre || detail.nombre]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="codeProd">
                    <label>Código (ej: #3524): </label>
                    <input
                      type="text"
                      name="codigo"
                      value={[input.codigo || detail.codigo]}
                      onChange={(e) => handlerChange(e)}
                    ></input>
                  </div>

                  <div className="descProd">
                    <label>Descripción: </label>
                    <textarea
                      type="text"
                      name="descripcion"
                      value={[input.descripcion || detail.descripcion]}
                      onChange={(e) => handlerChange(e)}
                    ></textarea>
                  </div>
                </div>

                <div className="editSubmit">
                  <button type="submit">Actualizar Producto!</button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}