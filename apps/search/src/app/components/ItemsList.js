import { environment } from '../../environments/environment';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavHeader from './Header';
import Search from './Search';
import Item from './Item';
import './ItemsList.scss';
import Breadcrumb from './Breadcrumb';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ItemsList() {
  const [results, saveResults] = useState({
    items: [],
    categories: [],
  });
  const [query, setQuery] = useState(useQuery().get('search'));
  const { items, categories } = results;
  const requestSearch = async () => {
    if (query?.length) {
      const res = await fetch(`${environment.api_url}/items?q=${query}`);
      const resJson = await res.json();
      saveResults({ ...resJson });
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
        <Breadcrumb categories={categories} />
        <ol className="search-layout">
          {items.map((item) => (
            <li className="search-layout__item" key={item.id}>
              <Item item={item}></Item>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ItemsList;
