import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import UserCard from "../Cards/UserCard";
import {
  getUsuarios,
  addPaginate,
  getRoles,
} from "../../redux/actions/actions";
import PaginadoUser from "../Paginados/PaginadoUsers";
import { Link } from "react-router-dom";

export default function Usuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);
  /*   const roles = useSelector((state) => state.roles); */
  let paginateNum = useSelector((state) => state.paginate);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  let currentUsuarios = usuarios.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getUsuarios());
    dispatch(getRoles());
    setCurrentPage(paginateNum);
  }, [dispatch, paginateNum]);

  const fnPaginado = (page) => {
    setCurrentPage(page);

    dispatch(addPaginate(page));
  };

  const paginatePrev = (prevPage) => {
    setCurrentPage(prevPage);

    dispatch(addPaginate(prevPage));
  };

  const paginateNext = (nextPage) => {
    setCurrentPage(nextPage);

    dispatch(addPaginate(nextPage));
  };

  console.log(currentUsuarios);
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de Usuarios</h2>

        <div className="btnsPanel">
          <Link to="/createUsuario" style={{ textDecoration: "none" }}>
            <button className="crear">Crear Usuario</button>
          </Link>
          <Link to="/usuariosBloqueados" style={{ textDecoration: "none" }}>
            <button className="crear">Ver usuarios bloqueados</button>
          </Link>
        </div>

        <PaginadoUser
          usersPerPage={usersPerPage}
          totalUsuarios={usuarios.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={usuarios.id}
        />

        {usuarios.length > 0 && (
          <div className="cards">
            {currentUsuarios
              .filter((user) => user.bloqueo === false)
              .map((u) => (
                <div key={u.id}>
                  <UserCard
                    nombre={`${u.nombre} ${u.apellido}`}
                    email={u.email}
                    id={u.id}
                    empresa={u.Empresa.nombre}
                    rol={u.Rol.rol}
                    bloqueo={u.bloqueo}
                  />
                </div>
              ))}
          </div>
        )}

        <PaginadoUser
          usersPerPage={usersPerPage}
          totalUsuarios={usuarios.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={usuarios.id}
        />
      </div>
    </div>
  );
}
