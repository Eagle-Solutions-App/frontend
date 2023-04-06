import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { updateProd } from "../../redux/actions/actions";

export default function CreacionProducto({ setShowModal, id, nombre, email }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* const detail = useSelector((state) => state.detailUser); */
  const rol = useSelector((state) => state.roles);

  const [input, setInput] = useState({
    id,
    nombre: "",
  });

  /*   const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }; */

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateProd(input, id));
    alert("Usuario editado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      nombre: "",
    });
    navigate("/usuarios");
  };

  return (
    <div className="containerModal">
      <>
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>Editando: {nombre}</h2>
        <form className="formModal" onSubmit={(e) => handlerSubmitForm(e)}>
          <div className="editModal">
            <div className="infoModal">
              <div className="nameModal">
                <p>Nombre del usuario: {nombre}</p>
                <p>Correo del usuario: {email}</p>
                <p>Rol actual: {rol[0]}</p>
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
    </div>
  );
}
