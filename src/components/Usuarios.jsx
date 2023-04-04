import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import { getUsuarios } from "../redux/actions/actions";

export default function PermisosAUsuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);
  const [input, setInput] = useState({
    id: "",
    nombre: "",
    categoria: "",
    subCategoria: "",
    descripcion: "",
  });

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="inicioBtn">Inicio</button>
        </Link>
        <h2>Panel de usuarios</h2>
        <div className="cards">
          {usuarios?.map((user) => {
            return (
              <div key={user[0].id}>
                <Card
                  nombre={user[0].nombre}
                  categoria={user.permisoActual}
                  id={user.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
