import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Search from './Search';
import ItemsList from './ItemsList';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/items?search=Huawei',
    search: 'Huawei',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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

test('call the onChange callback handle', async () => {
  const cop = render(<Search defaultQuery="Huawei" />);
  let inp = cop.getByLabelText('Encuentra todo lo que buscas');
  expect(inp.value).toBe('Huawei');
  fireEvent.change(inp, { target: { value: 'Ipad pro' } });
  inp = await screen.findByLabelText('Encuentra todo lo que buscas');
  expect(inp.value).toBe('Ipad pro');
});
