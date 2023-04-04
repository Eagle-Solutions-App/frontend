import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Card from "./Card";
import { getUsuarios } from "../redux/actions/actions";
import Paginado from "./Paginado";

export default function Usuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  console.log(usuarios);
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de usuarios</h2>

        <Paginado />
        <div className="cards">
          {usuarios.map((user) =>
            user.map((u) => (
              <div key={u.id}>
                <Card
                  nombre={`${u.nombre} ${u.apellido}`}
                  email={u.email}
                  id={u.id}
                />
              </div>
            ))
          )}
        </div>

        <Paginado />
      </div>
    </div>
  );
}
