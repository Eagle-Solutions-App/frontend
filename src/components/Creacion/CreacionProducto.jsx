import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDepositos,
  getSubcategs,
  postProd,
} from "../../redux/actions/actions";
import Navbar from "../Navbar";

export default function CreacionProducto() {
  const subCategs = useSelector((state) => state.subcategorias);
  const depos = useSelector((state) => state.depositos);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nombre: "",
    categoria: "",
    subcategoriaID: "",
    descripcion: "",
    depositoID: "",
    codigo: "",
    imagen: "",
  });

  useEffect(() => {
    dispatch(getSubcategs());
    dispatch(getDepositos());
  }, [dispatch]);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSelectSubcateg = (e) => {
    if (!input.subcategoriaID.includes(e.target.value)) {
      setInput({
        ...input,
        subcategoriaID: e.target.value,
      });
    }
  };

  const handlerSelectDepo = (e) => {
    if (!input.depositoID.includes(e.target.value)) {
      setInput({
        ...input,
        depositoID: e.target.value,
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
      subcategoriaID: "",
      descripcion: "",
      depositoID: "",
      codigo: "",
      imagen: "",
    });
    navigate("/productos");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Creación de Producto</h2>

        <form className="formSelect" onSubmit={(e) => handlerSubmitForm(e)}>
          {/* selección de subcategoría */}
          <p>Selecciona una Subcategoría!</p>
          <div className="check">
            {subCategs?.map((sub) => {
              return (
                <div key={sub.id}>
                  <label htmlFor={sub.nombre} key={sub.id}>
                    {sub.nombre}
                    <input
                      type="radio"
                      name="subcategoriaID"
                      id={sub.id}
                      value={[sub.id]}
                      onChange={(e) => handlerSelectSubcateg(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              );
            })}
          </div>

          {/* selección de depósito */}
          <p>Selecciona un depósito!</p>
          <div className="check">
            {depos?.map((depo) => {
              return (
                <div key={depo.id}>
                  <label htmlFor={depo.nombre} key={depo.id}>
                    {depo.nombre}
                    <input
                      type="radio"
                      name="depositoID"
                      id={depo.id}
                      value={[depo.id]}
                      onChange={(e) => handlerSelectDepo(e)}
                    />
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

              <div className="imgProd">
                <label>Imagen: </label>
                <input
                  type="url"
                  name="imagen"
                  value={input.imagen}
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
