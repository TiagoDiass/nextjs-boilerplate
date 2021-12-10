import { render, screen } from '@testing-library/react';

const Home = () => {
  return (
    <div>
      <h1>Testando</h1>
    </div>
  );
};

it('should pass', () => {
  expect(1 + 3).toBe(4);
});

it('should pass as well', () => {
  render(<Home />);

  expect(screen.getByRole('heading', { name: 'Testando' })).toBeInTheDocument();
});
