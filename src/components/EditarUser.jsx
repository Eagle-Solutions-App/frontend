import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getDetail, updateProd } from "../redux/actions/actions";

export default function CreacionProducto({ setShowModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detailUser);
  const rol = useSelector((state) => state.permisos);

  const { id } = useParams();

  const [input, setInput] = useState({
    id,
    nombre: "",
  });

  /*   useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]); */

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateProd(input, id));
    alert("Usuario editado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
    });
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        {detail && (
          <>
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Editando: {detail[0].nombre}</h2>
            <form>
              <div className="editProd">
                <div className="namecodedesc">
                  <div className="nameProd">
                    <p>Nombre del usuario: {detail[0].nombre}</p>
                    <p>Correo del usuario: {detail[0].email}</p>
                    <div className="selectSub">
                      <select>
                        {rol?.map((obj, i) => {
                          return (
                            <option value={obj} key={i}>
                              {obj}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="editSubmit">
                <button type="submit">Actualizar Usuario!</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
