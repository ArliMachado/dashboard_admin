import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CustomerItem from '.';

describe('<CustomerItem />', () => {
  it('should render the photo, name and country', () => {
    renderWithTheme(
      <CustomerItem
        name="David"
        country="Italy"
        image="photo.jpg"
        alt="David photo"
      />,
    );

    expect(screen.getByRole('heading', { name: /David/i })).toBeInTheDocument();
    expect(screen.getByText(/Italy/i)).toBeInTheDocument();
    expect(screen.getByAltText(/David photo/i)).toBeInTheDocument();
  });
});
