import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  // useHistory: () => ({
  //   push: mockHistoryPush,
  // }),
}));

test('renders whithout error', async () => {
  const component = await render(
    <Router>
      <Home />
    </Router>
  );
  const header = await component.getByTestId('nav-header-component');
  expect(header).toBeInTheDocument();
});
