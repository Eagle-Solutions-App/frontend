import React from "react";

export default function Paginado({
  empresasPerPage,
  totalEmpresas,
  paginate,
  paginatePrev,
  paginateNext,
  currentPage,
}) {
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalEmpresas / empresasPerPage); i++) {
    numberOfPages.push(i);
  }

  const handlePrev = () => {
    paginatePrev(currentPage - 1);
  };

  const handleNext = () => {
    paginateNext(currentPage + 1);
  };

  return (
    <div className="paginadoContainer">
      <div className="pagBtns">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="numberList"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {numberOfPages.map((num) => {
          return (
            <button
              className={currentPage !== num ? "numberList" : "current"}
              key={num}
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          );
        })}
        <button
          onClick={handleNext}
          disabled={currentPage === numberOfPages.length}
          className="numberList"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
