import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Card from "../Cards/Card";
import { getEmpresas } from "../../redux/actions/actions";

export default function Empresas() {
  const dispatch = useDispatch();
  const empresas = useSelector((state) => state.empresas);

  useEffect(() => {
    dispatch(getEmpresas());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de Empresas</h2>

        {empresas.length > 0 && (
          <div className="cards">
            {empresas.map((e) => (
              <div key={e.id}>
                <Card nombre={e.nombre} email={e.email} id={e.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
