import React from "react";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import EmpresaCard from "../Cards/EmpresaCard";

export default function EmpresasBloqueadas() {
  const bloqueados = useSelector((state) => state.empresasBloqueadas);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Empresas Bloqueadas</h2>

        <div className="cards">
          {bloqueados.map((u) => (
            <div key={u.id}>
              <EmpresaCard
                nombre={`${u.nombre} ${u.apellido}`}
                email={u.email}
                id={u.id}
                /* rol={u.Rols[0].rol} */
                bloqueado={u.bloqueado}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
