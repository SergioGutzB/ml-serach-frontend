import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

const component = render(<Search />);
const input = component.getByLabelText('Encuentra todo lo que buscas');

const setup = (props = {}, state = null) => {
  return shallow(<Search {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders whithout error', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'input');
  expect(input.length).toBe(1);
});

test('It should have a placeholder', () => {
  expect(input.placeholder).toBe('Nunca dejes de buscar');
});
