import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import UserCard from "./Cards/UserCard";

export default function UsuariosBloqueados() {
  const bloqueados = useSelector((state) => state.usuariosBloqueados);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Usuarios Bloqueados</h2>

        <div className="cards">
          {bloqueados.map((u) => (
            <div key={u.id}>
              <UserCard
                nombre={`${u.nombre} ${u.apellido}`}
                email={u.email}
                id={u.id}
                rol={u.Rols[0].rol}
                bloqueado={u.bloqueado}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
