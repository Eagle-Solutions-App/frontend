import React from "react";
import sacarCarrito from "../../img/sacarCarrito.png";

export default function ProdCard({ nombre, codigo, cantidad, id }) {
  return (
    <div className="card">
      <div className="info">
        <div className="cadaInfoPed">
          <p className="nombre">
            <b style={{ textDecoration: "underline 2px" }}>
              Producto solicitado:{" "}
            </b>
            <br></br>
            {nombre}({codigo})
          </p>
        </div>

        <div className="cadaInfoPed">
          <p className="subcategoria">
            <b style={{ textDecoration: "underline 2px" }}>
              Cantidad requerida:
            </b>
            <br></br>5
          </p>
        </div>
      </div>
      <div className="imagenes">
        <button>
          <img src={sacarCarrito} alt="sacarCarrito" />
        </button>
      </div>
    </div>
  );
}
