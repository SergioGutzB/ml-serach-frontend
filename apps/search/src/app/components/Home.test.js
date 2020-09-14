import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import Home from './Home';

const props = {};
const component = render(<Home {...props} />);

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
  // useHistory: () => ({
  //   push: mockHistoryPush,
  // }),
}));

test('renders whithout error', () => {
  const header = component.getByText('nav-header-component');
  screen.debug(header);
  expect().toBeInTheDocument();
});
