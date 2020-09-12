import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavHeader from './Header';
import Search from './Search';
import Item from './Item';
import './ItemsList.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ItemsList() {
  const [results, saveResults] = useState({
    items: []
  });

  const [query, setQuery] = useState(useQuery().get('search'));

  const { items } = results;

  const requestSearch = async () => {
    if (query?.length) {
      const res = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
      );
      const resJson = await res.json();
      saveResults({ items: resJson.results || [] });
    }
  };

  useEffect(() => {
    requestSearch();
  }, [query]);

  return (
    <>
      <NavHeader className="nav-header" data-test="nav-header-component">
        <Search
          className="nav-search"
          defaultQuery={query}
          setQuery={setQuery}
        ></Search>
      </NavHeader>
      <div className="wrapper">
        <div className="categories">Categories > </div>
        <ol className="search-layout">
          {items.map(item => (
            <li className="search-layout__item" key={item.id}>
              <Item result={item}></Item>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ItemsList;
