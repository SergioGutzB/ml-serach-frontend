import React from 'react';
import Item from './Item';
import './ItemsList.scss';

function ItemsList({ items }) {
  return (
    <div className="wrapper" data-testid="wrapper-div">
      <ol className="search-layout" data-testid="item-list-test">
        {items?.map((item) => (
          <li
            className="search-layout__item"
            key={item.id}
            role="item"
            data-testid={item.id}
          >
            <Item item={item}></Item>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ItemsList;
