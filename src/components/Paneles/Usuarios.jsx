import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Card from "../Cards/Card";
import { getUsuarios, addPaginate } from "../../redux/actions/actions";
import PaginadoUser from "../Paginados/PaginadoUsers";
import { Link } from "react-router-dom";

export default function Usuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);
  let paginateNum = useSelector((state) => state.paginate);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  let currentUsuarios = usuarios.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getUsuarios());
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

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de Usuarios</h2>

        <div className="btnCrear">
          <Link to="/createUsuario" style={{ textDecoration: "none" }}>
            <button className="crear">Crear Usuario</button>
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
            {currentUsuarios.map((u) => (
              <div key={u.id}>
                <Card
                  nombre={`${u.nombre} ${u.apellido}`}
                  email={u.email}
                  id={u.id}
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
