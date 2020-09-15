import React, { useState } from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  toBeInTheDocument,
  toHaveClass,
  toBeEmptyDOMElement,
} from '@testing-library/jest-dom';
import Item from './Item';

describe('Item', () => {
  const props = {
    item: {
      id: 'MLA875287668',
      title: 'Xiaomi Redmi 8a Dual Sim 64 Gb Azul Océano 4 Gb Ram',
      price: {
        currency: '$',
        amount: 34500,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_685302-MLA40448913585_012020-I.jpg',
      condition: 'new',
      free_shipping: true,
      state_name: 'Misiones',
    },
  };

  test('renders whithout error', () => {
    const component = render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const item = component.getByTestId('search-item-test');
    expect(item).toBeInTheDocument();
  });

  test('should render item with link image container element from item prop', async () => {
    const component = await render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const item = await screen.findByTestId('a-image-test');
    expect(item).toHaveAttribute('title', props.item.title);
    expect(item).toHaveAttribute('aria-label', props.item.title);
    expect(item).toBeInTheDocument();
  });

  test('should render item with image element from item prop', async () => {
    const component = await render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const image = await screen.findByTestId('image-test');
    expect(image).toHaveAttribute('src', props.item.picture);
    expect(image).toHaveAttribute('alt', props.item.title);
    expect(image).toBeInTheDocument();
  });

  test('should render item with price element from item prop', async () => {
    const component = await render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const symbol = await screen.findByTestId('price-symbol-test');
    const amount = await screen.findByTestId('price-amount-test');
    expect(symbol).toHaveTextContent(props.item.price.currency);
    expect(amount).toHaveTextContent(props.item.price.amount);
  });

  test('should render shipping image when the free_shipping filed is true ', async () => {
    const component = await render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const shipping = await screen.findByTestId('shipping-test');
    expect(props.item.free_shipping).toBeTruthy();
    expect(shipping).toBeInTheDocument();
  });

  test('should render a state address', async () => {
    const component = render(
      <Router>
        <Item {...props} />
      </Router>
    );
    const state = await screen.findByTestId('state-test');
    expect(state).toHaveTextContent(props.item.state_name);
  });
});
