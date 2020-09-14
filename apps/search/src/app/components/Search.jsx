import React, { useState } from 'react';
import './Search.scss';

function Search({ query, setQuery, handleSubmit }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="nav-search" role="search" onSubmit={handleSubmit}>
      <input
        className="nav-search-input"
        aria-label="Encuentra todo lo que buscas"
        placeholder="Nunca dejes de buscar"
        type="text"
        maxLength="120"
        name="as_word"
        autoFocus
        tabIndex="1"
        value={query}
        onChange={handleChange}
        data-test="input-test"
      />
      <button type="submit" tabIndex="2" className="nav-search-btn">
        <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
      </button>
    </form>
  );
}

export default Search;
