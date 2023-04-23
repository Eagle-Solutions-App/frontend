import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getRoles, updateUser } from "../../redux/actions/actions";

export default function EditarUser({ setShowModal, id, nombre, email, rol }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.roles);
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const [input, setInput] = useState({
    id,
    rolID: "",
  });

  const handlerSelectRol = (e) => {
    if (!input.rolID.includes(e.target.value)) {
      setInput({ ...input, rolID: e.target.value });
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateUser(input, id));
    alert("Usuario editado satisfactoriamente! Se lo redirigirá al inicio...");
    setInput({
      rolID: "",
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
                <p>Rol: {rol}</p>
                <label>¿Desea cambiar el rol? Seleccione uno nuevo:</label>
                <div className="selectModal">
                  <select onChange={(e) => handlerSelectRol(e)}>
                    {roles?.map(
                      (rol) =>
                        rol.id !== 1 && (
                          <option value={rol.id} key={rol.id}>
                            {rol.rol}
                          </option>
                        )
                    )}
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
