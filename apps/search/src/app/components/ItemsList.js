import React from 'react';
import Item from './Item';
import './ItemsList.scss';

function ItemsList({ items }) {
  return (
    <div className="wrapper" data-test="wrapper-div">
      <ol className="search-layout">
        {items?.map((item) => (
          <li className="search-layout__item" key={item.id}>
            <Item item={item}></Item>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ItemsList;
