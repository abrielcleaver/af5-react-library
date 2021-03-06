import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it.skip('renders a welcome message when signed out', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // await screen.findByRole('list', { name: 'book list' });

  expect(container).toMatchSnapshot();
});
