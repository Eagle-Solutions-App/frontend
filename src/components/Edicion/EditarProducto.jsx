import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
  getDepositos,
  getDetail,
  getSubcategs,
  updateProd,
} from "../../redux/actions/actions";

export default function EditarProducto() {
  const subCategs = useSelector((state) => state.subcategorias);
  const depos = useSelector((state) => state.depositos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail.resultado);
  console.log(detail);
  const { id } = useParams();

  const [input, setInput] = useState({
    nombre: "",
    categoria: "",
    subcategoriaID: "",
    descripcion: "",
    depositoID: "",
    codigo: "",
    imagen: "",
    cantidad: "",
  });

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getSubcategs());
    dispatch(getDepositos());
  }, [dispatch, id]);

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
    dispatch(updateProd(input, id));
    alert("Producto editado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
      categoria: "",
      subcategoriaID: "",
      descripcion: "",
      depositoID: "",
      codigo: "",
      imagen: "",
      cantidad: "",
    });
    navigate("/productos");
  };

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="container">
        {detail && (
          <>
            <h2>Editando: {detail.nombre}</h2>

            <form className="formEdit" onSubmit={(e) => handlerSubmitForm(e)}>
              {/* selección de subcategoría */}
              <p>Selecciona una Subcategoría!</p>
              <div className="check">
                {subCategs?.map((sub) => {
                  return (
                    <div key={sub.id}>
                      <label htmlFor={sub.nombre} key={sub.id}>
                        <span>{sub.nombre}</span>
                        <input
                          type="radio"
                          name="subcategoriaID"
                          id={sub.id}
                          value={[sub.id]}
                          checked={sub.id === detail.Subcategorium.id}
                          onClick={(e) =>
                            (detail.Subcategorium.id = parseInt(e.target.value))
                          }
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
                          checked={depo.id === detail.Deposito.id}
                          onClick={(e) =>
                            (detail.Deposito.id = parseInt(e.target.value))
                          }
                          onChange={(e) => handlerSelectDepo(e)}
                        />
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
                      required
                    ></input>
                  </div>

                  <div className="codeProd">
                    <label>Código (ej: #3524): </label>
                    <input
                      type="text"
                      name="codigo"
                      value={[input.codigo || detail.codigo]}
                      onChange={(e) => handlerChange(e)}
                      required
                    ></input>
                  </div>

                  <div className="codeProd">
                    <label>Cantidad: </label>
                    <input
                      type="text"
                      name="cantidad"
                      value={[input.cantidad || detail.cantidad]}
                      onChange={(e) => handlerChange(e)}
                      required
                    ></input>
                  </div>

                  <div className="imgProd">
                    <label>Imagen: </label>
                    <input
                      type="url"
                      name="imagen"
                      value={input.imagen || detail.imagen}
                      onChange={(e) => handlerChange(e)}
                      required
                    ></input>
                  </div>

                  <div className="descProd">
                    <label>Descripción: </label>
                    <textarea
                      type="text"
                      name="descripcion"
                      value={[input.descripcion || detail.descripcion]}
                      onChange={(e) => handlerChange(e)}
                      required
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
