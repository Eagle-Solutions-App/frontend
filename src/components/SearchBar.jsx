import React from "react";

export default function SearchBar() {
  return (
    <div className="searchBar_container">
      <input
        type="text"
        placeholder="
        Buscar producto..."
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
