import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landCont">
      <div className="landingContainer">
        <div className="wrapper">
          <h1>Eagle Solutions</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            consectetur animi, quia magni null.
          </p>
          <NavLink to="/home">
            <button>Ingresar</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
