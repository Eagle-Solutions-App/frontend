import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import EmpresaCard from "../Cards/EmpresaCard";
import { useDispatch } from "react-redux";
import { getEmpresas } from "../../redux/actions/actions";

export default function EmpresasBloqueadas() {
  let empresas = useSelector((state) => state.empresas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmpresas());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="container">
        <h2>Empresas Bloqueadas</h2>

        <div className="cards">
          {empresas
            .filter((e) => e.bloqueo === true)
            .map((u) => (
              <div key={u.id}>
                <EmpresaCard
                  nombre={u.nombre}
                  email={u.email}
                  descripcion={u.descripcion}
                  id={u.id}
                  bloqueo={u.bloqueo}
                  fechaSuscrip={u.suscripcionFecha}
                  tiempoSuscrip={u.suscripcionTiempo}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
