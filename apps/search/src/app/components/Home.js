import { environment } from '../../environments/environment';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavHeader from './Header';
import Search from './Search';
import Breadcrumb from './Breadcrumb';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';
import { useHistory } from 'react-router-dom';
import * as storage from '../utils/storage';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home(props) {
  const [query, setQuery] = useState(useQuery().get('search') || '');
  const [request, setRequest] = useState(!!query || false);
  const [results, setResults] = useState({
    items: [],
    categories: [],
  });
  const [itemId, setItemId] = useState('');
  const [item, setItem] = useState(undefined);
  const { items, categories } = results;

  const getItems = async () => {
    if (query?.length && request) {
      const res = await fetch(`${environment.api_url}/items?q=${query}`);
      const resJson = await res.json();
      setResults({ ...resJson });
      storage.setItem('categories', resJson.categories);
      setRequest(false);
    }
  };

  const getItemDetail = async () => {
    if (itemId) {
      const res = await fetch(`${environment.api_url}/items/${itemId}`);
      const resJson = await res.json();
      setItem({ ...resJson.item });
      setResults({ categories: storage.getItem('categories') });
    }
  };

  const history = useHistory({ forceRefresh: true });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (setQuery) {
      setRequest(true);
    }
    history.push(`/items?search=${query}`);
    window.location.reload(false);
  };

  useEffect(() => {
    getItems();
    document.title = `${query} -  Mercado Libre`;
  }, [request, query]);

  useEffect(() => {
    getItemDetail();
  }, [itemId]);

  return (
    <>
      <NavHeader className="nav-header">
        <Search
          className="nav-search"
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          query={query}
        ></Search>
      </NavHeader>
      <div className="wrapper" data-testid="wrapper-div">
        <Breadcrumb categories={categories} />
      </div>
      <Router hsitory={history} forceRefresh={true}>
        <Switch>
          <Route exact path="#" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/items"
            render={(props) => <ItemsList {...props} items={items} />}
          />
          <Route
            exact
            path="/items/:id"
            render={(props) => (
              <ItemDetail {...props} setItemId={setItemId} item={item} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
