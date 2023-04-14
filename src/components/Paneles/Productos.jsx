import React, { useEffect, useState } from "react";
import ProdCard from "../Cards/ProdCard";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar.jsx";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import shopping from "../../img/shopping.png";
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

  console.log(currentProducts);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Panel de Productos</h2>

        <div className="btnsPanel">
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
                <ProdCard
                  nombre={card.nombre}
                  categoria={card.categoria}
                  subcategoria={card.subcategoria}
                  descripcion={card.descripcion}
                  codigo={card.codigo}
                  id={card.id}
                  editar={editar}
                  borrar={borrar}
                  shopping={shopping}
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
