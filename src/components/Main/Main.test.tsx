import Main from './Main';
import { render, screen } from '@testing-library/react';

describe('Component: Main', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('heading', { name: 'React Avançado' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
