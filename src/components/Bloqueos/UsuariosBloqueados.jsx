import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../Cards/UserCard";
import { getUsuarios } from "../../redux/actions/actions";

export default function UsuariosBloqueados() {
  let usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Usuarios Bloqueados</h2>

        <div className="cards">
          {usuarios
            .filter((user) => user.bloqueo === true)
            .map((u) => (
              <div key={u.id}>
                <UserCard
                  nombre={`${u.nombre} ${u.apellido}`}
                  email={u.email}
                  id={u.id}
                  rol={u.Rol.rol}
                  bloqueo={u.bloqueo}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
