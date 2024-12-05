import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About';

test('should load', () => {
  render(<About/>);

  const heading = screen.getByRole('heading', { name: /about us/i });
  expect(heading).toBeInTheDocument();
});
