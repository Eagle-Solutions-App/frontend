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
    apellido: "",
    email: "",
    clave: "",
  });

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  console.log(usuarios);
  return (
    <div>
      <Navbar />
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="inicioBtn">Inicio</button>
        </Link>
        <h2>Panel de usuarios</h2>

        <div className="cards">
          {usuarios.map((user) =>
            user.map((u) => (
              <div key={u.id}>
                <Card
                  nombre={`${u.nombre} ${u.apellido}`}
                  categoria={u.email}
                  subcategoria={u.email}
                  id={u.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
