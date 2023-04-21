import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import DepositoCard from "../Cards/DepositoCard";
import { addPaginate, getDepositos } from "../../redux/actions/actions";
import PaginadoDepositos from "../Paginados/PaginadoDepositos";

export default function Depósitos() {
  const dispatch = useDispatch();
  const depositos = useSelector((state) => state.depositos);
  let paginateNum = useSelector((state) => state.paginate);

  const [currentPage, setCurrentPage] = useState(1);
  const depositosPerPage = 6;
  const lastIndex = currentPage * depositosPerPage;
  const firstIndex = lastIndex - depositosPerPage;
  let currentDepositos = depositos.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getDepositos());
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
  /* console.log(currentDepositos); */
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de Depósitos</h2>

        <div className="btnsPanel">
          <Link to="/createDepositos" style={{ textDecoration: "none" }}>
            <button className="crear">Crear Depósito</button>
          </Link>
        </div>

        <PaginadoDepositos
          depositosPerPage={depositosPerPage}
          totalDepositos={depositos.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={depositos.id}
        />

        {depositos.length > 0 && (
          <div className="cards">
            {currentDepositos.map((dep) => (
              <div key={dep.id}>
                <DepositoCard
                  nombre={dep.nombre}
                  pais={dep.pais}
                  ciudad={dep.ciudad}
                  id={dep.id}
                  provincia={dep.provincia}
                  descripcion={dep.descripcion}
                  calle={dep.calle}
                  altura={dep.altura}
                  borrar={borrar}
                  editar={editar}
                  tipo={dep.TipoDeposito.tipo}
                  observaciones={dep.observaciones}
                />
              </div>
            ))}
          </div>
        )}

        <PaginadoDepositos
          depositosPerPage={depositosPerPage}
          totalDepositos={depositos.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={depositos.id}
        />
      </div>
    </div>
  );
}
