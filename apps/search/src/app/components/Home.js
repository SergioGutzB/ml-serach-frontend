import React from 'react';
import NavHeader from './Header';
import Search from './Search';

function Home() {
  return (
    <NavHeader className="nav-header" data-test="nav-header-component">
      <Search className="nav-search"></Search>
    </NavHeader>
  );
}

export default Home;
