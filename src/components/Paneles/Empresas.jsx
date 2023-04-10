import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import Card from "../Cards/Card";
import { getEmpresas, addPaginate } from "../../redux/actions/actions";
import PaginadoEmpresas from "../Paginados/PaginadoEmpresas";

export default function Empresas() {
  const dispatch = useDispatch();
  const empresas = useSelector((state) => state.empresas);
  let paginateNum = useSelector((state) => state.paginate);

  const [currentPage, setCurrentPage] = useState(1);
  const empresasPerPage = 6;
  const lastIndex = currentPage * empresasPerPage;
  const firstIndex = lastIndex - empresasPerPage;
  let currentEmpresas = empresas.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getEmpresas());
  }, [dispatch]);

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
        <h2>Panel de Empresas</h2>

        <PaginadoEmpresas
          empresasPerPage={empresasPerPage}
          totalEmpresas={empresas.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={empresas.id}
        />

        {empresas.length > 0 && (
          <div className="cards">
            {currentEmpresas.map((e) => (
              <div key={e.id}>
                <Card nombre={e.nombre} email={e.email} id={e.id} />
              </div>
            ))}
          </div>
        )}

        <PaginadoEmpresas
          empresasPerPage={empresasPerPage}
          totalEmpresas={empresas.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={empresas.id}
        />
      </div>
    </div>
  );
}
