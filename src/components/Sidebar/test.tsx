import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Sidebar from '.';

describe('<Sidebar />', () => {
  it('should be render sidebar options', async () => {
    renderWithTheme(<Sidebar />);

    const menuElements = screen.getAllByRole('listitem');

    expect(menuElements.length).toBe(6);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
