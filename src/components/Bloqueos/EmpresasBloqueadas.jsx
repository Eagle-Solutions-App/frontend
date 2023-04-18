import React from "react";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import EmpresaCard from "../Cards/EmpresaCard";

export default function EmpresasBloqueadas() {
  let empresas = useSelector((state) => state.empresas);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Empresas Bloqueadas</h2>

        <div className="cards">
          {empresas
            .filter((e) => e.bloqueo === true)
            .map((u) => (
              <div key={u.id}>
                <EmpresaCard
                  nombre={`${u.nombre} ${u.apellido}`}
                  email={u.email}
                  id={u.id}
                  /* rol={u.Rols[0].rol} */
                  bloqueo={u.bloqueo}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
