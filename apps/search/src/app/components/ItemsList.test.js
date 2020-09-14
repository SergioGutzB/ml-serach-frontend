import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ItemsList from './ItemsList';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/items?search=Huawei',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('ItemsList', () => {
  const props = {
    history: {
      length: 17,
      action: 'POP',
    },
    location: {
      pathname: '/items',
      search: '?search=Huawei',
      hash: '',
      key: 'crwldr',
    },
    match: {
      path: '/items',
      url: '/items',
      isExact: true,
      params: '{}',
    },
    useLocation: () => 'Huawei',
  };

  const component = render(<ItemsList {...props} />);

  const setup = (state = null) => {
    return shallow(<ItemsList {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test('renders whithout error', () => {
    const mockSetQuery = jest.fn();
    React.useState = jest.fn(() => ['', mockSetQuery]);
    const wrapper = setup();
    const search = findByTestAttr(wrapper, 'search-component');
    const queryState = wrapper.results;
    expect(search.length).toBe(1);
  });

  // test('should have proper props for Search component', () => {
  //   const { result, rerender } = renderHook(() => ItemsList({ ...props }));
  //   rerender();
  //   act(() => {
  //     // result.current.setQuery('Huawei');
  //   });
  //   console.log(result.current);
  //   expect(result.current.query).toBe('Huawei');
  // });
});
