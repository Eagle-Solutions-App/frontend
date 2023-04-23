import React, { useEffect, useState } from "react";
import ProdCard from "../Cards/ProdCard";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar.jsx";
import borrar from "../../img/trash.png";
import editar from "../../img/edit.png";
import shopping from "../../img/shopping.png";
import {
  getProductos,
  addPaginate,
  getCateg,
} from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Paginado from "../Paginados/PaginadoProductos.jsx";

export default function Home() {
  const dispatch = useDispatch();
  let todosLosProds = useSelector((state) => state.productosHome);
  let paginateNum = useSelector((state) => state.paginate);
  let categorias = useSelector((state) => state.categorias);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  let currentProducts = todosLosProds.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getProductos());
    dispatch(getCateg());
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

        {todosLosProds.length > 0 && categorias.length && (
          <div className="cards">
            {currentProducts.map((card) => (
              <div key={card.id}>
                <ProdCard
                  nombre={card.nombre}
                  categoria={
                    categorias[0].Subcategoria[0].id === card.Subcategorium.id
                      ? categorias[0].nombre
                      : categorias[1].nombre
                  }
                  subcategoria={card.Subcategorium.nombre}
                  descripcion={card.descripcion}
                  codigo={card.codigo}
                  cantidad={card.cantidad}
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
