import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Dashboard from '.';

jest.mock('components/CardBox', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CardBox"></div>;
    },
  };
});

jest.mock('components/RecentOrders', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Recent Orders"></div>;
    },
  };
});

jest.mock('components/RecentCustomers', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Recent Customers"></div>;
    },
  };
});

describe('<Dashboard />', () => {
  it('should render cardboxes, recent orders and recent customers', () => {
    renderWithTheme(<Dashboard />);

    expect(screen.getByTestId('Mock CardBox')).toBeInTheDocument();

    expect(screen.getByTestId('Mock Recent Orders')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Recent Customers')).toBeInTheDocument();
  });
});
