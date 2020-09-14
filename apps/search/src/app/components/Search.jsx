import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Search.scss';

function Search({ defaultQuery, setQuery }) {
  const [search, saveSearch] = useState({
    query: defaultQuery || '',
  });

  const { query } = search;

  const history = useHistory();

  const handleChange = (e) => {
    saveSearch({
      query: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setQuery) {
      setQuery(query);
    }
    history.push(`/items?search=${query}`);
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
        data-test="input"
      />
      <button type="submit" tabIndex="2" className="nav-search-btn">
        <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
      </button>
    </form>
  );
}

export default Search;
