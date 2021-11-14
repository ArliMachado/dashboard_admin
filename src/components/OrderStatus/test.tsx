import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import OrderStatus from '.';

describe('<OrderStatus />', () => {
  it('should render the green background color when order status is delivered', () => {
    renderWithTheme(<OrderStatus status="delivered" />);

    expect(screen.getByText(/delivered/i)).toHaveStyle({
      background: theme.colors.green,
    });
  });

  it('should render the orange background color when order status is pending', () => {
    renderWithTheme(<OrderStatus status="pending" />);

    expect(screen.getByText(/pending/i)).toHaveStyle({
      background: theme.colors.orange,
    });
  });

  it('should render the red background color when order status is return', () => {
    renderWithTheme(<OrderStatus status="return" />);

    expect(screen.getByText(/return/i)).toHaveStyle({
      background: theme.colors.red,
    });
  });

  it('should render the blue background color when order status is inprogress', () => {
    renderWithTheme(<OrderStatus status="inprogress" />);

    expect(screen.getByText(/inprogress/i)).toHaveStyle({
      background: theme.colors.blue,
    });
  });
});
