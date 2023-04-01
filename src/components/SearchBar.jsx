import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchXname } from "../redux/actions/actions";

export default function SearchBar() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const fnState = (e) => {
    setState(e.target.value);
  };

  const limpiarState = () => {
    dispatch(searchXname(state));
    setState("");
  };

  return (
    <div>
      <div className="searchBar_container">
        <input
          type="text"
          placeholder="Buscar producto..."
          onChange={fnState}
          value={state}
        />
        <button className="search-btn" onClick={limpiarState}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
