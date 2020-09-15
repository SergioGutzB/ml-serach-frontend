import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from './Search';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

const props = {
  query: 'Huawei',
};
const component = render(<Search {...props} />);
const input = component.getByLabelText('Encuentra todo lo que buscas');

test('renders whithout error', () => {
  expect(input).toBeInTheDocument();
});

test('It should have a placeholder', () => {
  expect(input.placeholder).toBe('Nunca dejes de buscar');
});

test('call the onChange callback handle', async () => {
  const setQuery = async (value) => {
    await expect(value).toBe('Ipad pro');
  };
  const cop = await render(<Search {...props} setQuery={setQuery} />);
  let inp = cop.getByLabelText('Encuentra todo lo que buscas');
  expect(inp.value).toBe('Huawei');
  fireEvent.change(inp, { target: { value: 'Ipad pro' } });
  inp = await screen.findByLabelText('Encuentra todo lo que buscas');
});

test('sould  have focus the input  when render first time ', async () => {
  const component = await render(<Search {...props} />);
  const input = await screen.findByTestId('input-test');
  expect(input).toHaveFocus();
});

test('sould be input value equal to Huawei from the query props ', async () => {
  const component = await render(<Search {...props} />);
  const input = await screen.findByTestId('input-test');
  expect(input).toHaveValue('Huawei');
});
