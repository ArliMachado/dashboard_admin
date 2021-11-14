import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import RecentCustomers from '.';

describe('<RecentCustomers />', () => {
  it('should render the heading', () => {
    renderWithTheme(<RecentCustomers />);

    expect(
      screen.getByRole('heading', { name: /Recent Customers/i }),
    ).toBeInTheDocument();
  });
});
