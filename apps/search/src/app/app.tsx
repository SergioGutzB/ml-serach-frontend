import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Route ath="/" component={Home} />
    </Router>
  );
}

export default App;
