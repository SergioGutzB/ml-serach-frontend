import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders whithout error', async () => {
  const component = await render(
    <Router>
      <Header />
    </Router>
  );
  const header = await component.getByTestId('nav-header-component');
  expect(header).toBeInTheDocument();
});

test('should render logo link', async () => {
  const component = await render(
    <Router>
      <Header />
    </Router>
  );
  const logo = await component.getByTestId('logo-link-test');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('aria-label', 'Ir al contenido principal');
  expect(logo).toHaveAttribute('role', 'button');
});

test('should render logo image', async () => {
  const component = await render(
    <Router>
      <Header />
    </Router>
  );
  const logo = await component.getByTestId('logo-image-test');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'Mercado libre - Logo');
  expect(logo).toHaveAttribute('src', '/assets/Logo_ML.png');
});
