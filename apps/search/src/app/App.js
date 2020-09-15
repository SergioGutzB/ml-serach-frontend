import './scss/main.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  // Update the title documento to help to SEO
  useEffect(() => {
    document.title = 'Mercado Libre';
  });

  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
