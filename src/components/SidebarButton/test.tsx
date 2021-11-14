import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Home } from '@styled-icons/ionicons-outline';

import SidebarButton from '.';
import theme from 'styles/theme';

describe('<SidebarButton />', () => {
  it('should render title and icon', () => {
    renderWithTheme(
      <SidebarButton title="Dashboard" icon={<Home data-testid="icon" />} />,
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should be change color on mouse hover', () => {
    renderWithTheme(
      <SidebarButton title="Dashboard" icon={<Home data-testid="icon" />} />,
    );

    const menuElement = screen.getByRole('link');

    expect(menuElement).toHaveStyle({
      color: theme.colors.secondary,
    });

    waitFor(() => {
      fireEvent.mouseOver(menuElement);

      expect(menuElement).toHaveStyle({
        color: theme.colors.primary,
      });
    });
  });
});
