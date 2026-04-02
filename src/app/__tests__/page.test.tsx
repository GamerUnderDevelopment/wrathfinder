import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Landing Page: Character Builder', () => {
  it('renders the main heading', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { name: /build your wrath/i })).toBeInTheDocument();
  });
  it.skip('renders the character builder container', () => {});
  it.skip('renders the initial form elements', () => {});
  it.skip('matches the snapshot', () => {});
});
