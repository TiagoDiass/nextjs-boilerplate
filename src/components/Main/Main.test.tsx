import Main from './Main';
import { render, screen } from '@testing-library/react';

describe('Component: Main', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('heading', { name: 'Next.js Boilerplate' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
