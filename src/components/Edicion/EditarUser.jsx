import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getRoles, getUsuarios, updateUser } from "../../redux/actions/actions";

export default function EditarUser({ setShowModal, id, nombre, email, rol }) {
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

  const onChange = () => {
    let res = window.confirm(
      `¿Está seguro de querer cambiarle el rol de ${nombre}?`
    );
    if (res === true) {
      dispatch(getUsuarios());
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateUser(input, id));
    onChange();
    setInput({
      rolID: "",
    });
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
                <label>¿Desea cambiar el rol?</label>
                <div className="selectModal">
                  <select onChange={(e) => handlerSelectRol(e)}>
                    <option hidden>Seleccione un nuevo rol...</option>
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
