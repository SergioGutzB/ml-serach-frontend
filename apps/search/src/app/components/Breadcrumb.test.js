import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import Breadcrumb from './Breadcrumb';

test('renders whithout error', () => {
  const component = render(<Breadcrumb />);
  const ul = component.getByTestId('breadcrumb');
  expect(ul).toBeInTheDocument();
});

test('should render all elements from categories props', async () => {
  const categories = ['Tagnología', 'Computación', 'Tables'];
  const component = await render(<Breadcrumb categories={categories} />);
  const lis = await screen.findAllByRole('item-navigation');
  expect(lis.length).toBe(3);
});
