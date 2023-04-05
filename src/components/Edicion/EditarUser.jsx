import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDetail, updateProd } from "../../redux/actions/actions";

export default function CreacionProducto({ setShowModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detailUser);
  const rol = useSelector((state) => state.roles);

  const { id } = useParams();

  const [input, setInput] = useState({
    id,
    nombre: "",
  });

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
    <div className="containerModal">
      {detail && (
        <>
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <h2>Editando: {detail[0].nombre}</h2>
          <form className="formModal">
            <div className="editModal">
              <div className="infoModal">
                <div className="nameModal">
                  <p>Nombre del usuario: {detail[0].nombre}</p>
                  <p>Correo del usuario: {detail[0].email}</p>
                  <p>Rol actual: {detail[0].rol}</p>
                  <div className="selectModal">
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
  );
}
