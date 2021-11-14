import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import RecentOrders from '.';

describe('<RecentOrders />', () => {
  it('should render the table orders', () => {
    renderWithTheme(<RecentOrders />);

    expect(screen.getByText('Recent Orders')).toBeInTheDocument();
  });
});
