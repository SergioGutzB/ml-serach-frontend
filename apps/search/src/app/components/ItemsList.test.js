import React, { useState } from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import ItemsList from './ItemsList';
import { BrowserRouter as Router } from 'react-router-dom';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

describe('ItemsList', () => {
  const props = {
    items: [
      {
        id: 'MLA875287668',
        title: 'Xiaomi Redmi 8a Dual Sim 64 Gb Azul Océano 4 Gb Ram',
        price: {
          currency: '$',
          amount: 34500,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_685302-MLA40448913585_012020-I.jpg',
        condition: 'new',
        free_shipping: true,
        state_name: 'Misiones',
      },
      {
        id: 'MLA837378807',
        title: 'Xiaomi Black Shark Dual Sim 64 Gb Black 6 Gb Ram',
        price: {
          currency: '$',
          amount: 89990,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_982344-MLA32994297777_112019-I.jpg',
        condition: 'new',
        free_shipping: true,
        state_name: 'Capital Federal',
      },
    ],
  };

  test('renders whithout error', () => {
    const component = render(
      <Router>
        <ItemsList {...props} />
      </Router>
    );
    const list = component.getByTestId('item-list-test');
    expect(list).toBeInTheDocument();
  });

  test('should render all item elements from items props', async () => {
    const component = await render(
      <Router>
        <ItemsList {...props} />
      </Router>
    );
    const list = await screen.findAllByRole('item');
    const firstElement = await screen.findByTestId('MLA875287668');
    expect(firstElement).toBeInTheDocument();
    expect(list.length).toBe(2);
  });
});
