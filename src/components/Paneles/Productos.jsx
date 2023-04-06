import React, { useEffect, useState } from "react";
import Card from "../Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar.jsx";
import { getProductos, addPaginate } from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Paginado from "../Paginados/PaginadoProductos.jsx";

export default function Home() {
  const dispatch = useDispatch();
  let todosLosProds = useSelector((state) => state.productosHome);
  let paginateNum = useSelector((state) => state.paginate);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  let currentProducts = todosLosProds.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getProductos());
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
        <h2>Bienvenido! Usted es Administrador</h2>

        <div className="btnCrear">
          <Link to="/producto" style={{ textDecoration: "none" }}>
            <button className="crear">Crear Producto</button>
          </Link>
        </div>

        <Paginado
          productsPerPage={productsPerPage}
          totalProducts={todosLosProds.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={todosLosProds.id}
        ></Paginado>

        {todosLosProds.length > 0 && (
          <div className="cards">
            {currentProducts.map((card) => (
              <div key={card.id}>
                <Card
                  nombre={card.nombre}
                  categoria={card.categoria}
                  subcategoria={card.subcategoria}
                  descripcion={card.descripcion}
                  codigo={card.codigo}
                  id={card.id}
                />
              </div>
            ))}
          </div>
        )}

        <Paginado
          productsPerPage={productsPerPage}
          totalProducts={todosLosProds.length}
          paginate={fnPaginado}
          paginatePrev={paginatePrev}
          currentPage={currentPage}
          paginateNext={paginateNext}
          key={todosLosProds.id}
        ></Paginado>
      </div>
    </div>
  );
}
