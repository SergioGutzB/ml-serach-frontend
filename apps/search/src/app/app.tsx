import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={ItemsList} />
        <Route exact path="/item/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default App;
