import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchXname } from "../redux/actions/actions";

export default function SearchBar({ open }) {
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
    <div className={`searchBar_container ${open ? "open" : ""}`}>
      <input
        type="text"
        placeholder="Buscar ..."
        onChange={fnState}
        value={state}
      />
      <button className="search-btn" onClick={limpiarState}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
